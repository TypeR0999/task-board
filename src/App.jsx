import { useEffect, useState } from "react";

// ローカルストレージに保存するときの名前
const STORAGE_KEY = "task-board.tasks";

// 保存済みのタスクを読み込む。無い・壊れている場合は空の一覧にする
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function App() {
  // タスクの一覧。1件は { id, text, done } の形。最初は保存済みのものを読み込む
  const [tasks, setTasks] = useState(loadTasks);
  // 入力欄の文字
  const [text, setText] = useState("");

  // タスクが変わるたびにローカルストレージへ保存する
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // 保存できない環境（プライベートモードなど）では何もしない
    }
  }, [tasks]);

  // タスクを追加する
  function addTask(event) {
    event.preventDefault();
    const trimmed = text.trim();
    if (trimmed === "") return;
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), text: trimmed, done: false },
    ]);
    setText("");
  }

  // 完了・未完了を切り替える
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  // タスクを削除する
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <main className="board">
      <h1>タスクボード</h1>

      <form className="add-form" onSubmit={addTask}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="新しいタスクを入力"
          aria-label="新しいタスク"
        />
        <button type="submit">追加</button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty">タスクはまだありません</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.done ? "task done" : "task"}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
              </label>
              <button
                className="delete"
                onClick={() => deleteTask(task.id)}
                aria-label={`「${task.text}」を削除`}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
