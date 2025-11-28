// AdminPanel.js
import { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo/logo.png";
import Workman from "./logo/working.png";

function AdminPanel({ onLogout }) {
  // LOAD MENU ITEMS FROM LOCAL STORAGE
  const [menuItems, setMenuItems] = useState(() => {
    const saved = localStorage.getItem("menuItems");
    return saved
      ? JSON.parse(saved)
      : [
          { name: "Website", link: "https://izml.gov.np/" },
          { name: "Account", link: "https://izml.gov.np/" },
          { name: "Attendance", link: "http://103.180.240.11:8008/" },
          { name: "Payroll", link: "https://izml.gov.np/" },
          { name: "PIMS", link: "https://izml.gov.np/" },
          { name: "Billing", link: "https://izml.gov.np/" },
          { name: "Meter Reading", link: "https://izml.gov.np/" },
        ];
  });

  // SAVE TO LOCAL STORAGE WHEN CHANGED
  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menuItems));
  }, [menuItems]);

  const [newName, setNewName] = useState("");
  const [newLink, setNewLink] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // ADD ITEM
  const addItem = () => {
    if (!newName || !newLink) return;
    setMenuItems([...menuItems, { name: newName, link: newLink }]);
    setNewName("");
    setNewLink("");
  };

  // DELETE ITEM
  const deleteItem = (index) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  // SAVE EDIT
  const saveEdit = () => {
    const updated = [...menuItems];
    updated[editIndex.index] = {
      name: editIndex.name,
      link: editIndex.link,
    };
    setMenuItems(updated);
    setEditIndex(null);
  };

  return (
    <div className="App">
      {/* HEADER */}
      <nav className="bg-blue-900 p-8 text-white h-32 flex justify-between items-center">
        <div className="flex">
          <div className="h-24 w-24 mb-4">
            <img src={logo} alt="Logo" />
          </div>
          <div className="ml-4 pt-4 text-left">
            <h3 className="text-base">नेपाल सरकारको स्वामित्व भएको</h3>
            <h2 className="text-xl font-bold">औद्योगिक क्षेत्र व्यवस्थापन लिमिटेड</h2>
            <h3 className="text-base">बालाजु, काठमाण्डौ, नेपाल</h3>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg text-white shadow"
        >
          Logout
        </button>
      </nav>

      {/* TITLE */}
      <div className="bg-gray-100 p-4">
        <h2 className="font-bold text-2xl text-left">Welcome to Admin Dashboard</h2>
      </div>

      {/* MAIN SECTION */}
      <div className="min-h-full bg-gradient-to-b from-sky-800 to-purple-500 p-8 text-white grid grid-cols-3">
        <div>
          <img src={Workman} alt="Workman" />
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-2 p-10 text-left">
          <h1 className="text-3xl font-bold mb-4">Manage Menu Items</h1>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full">
            {/* Add Form */}
            <div className="flex gap-4 mb-4">
              <input
                className="border p-2 rounded w-48"
                placeholder="Menu Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <input
                className="border p-2 rounded w-72"
                placeholder="Menu Link"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={addItem}
              >
                Add
              </button>
            </div>

            {/* List */}
            <ul className="space-y-3">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-200 p-3 rounded"
                >
                  {editIndex?.index === index ? (
                    <div className="flex gap-2 w-full">
                      <input
                        className="border p-2 rounded w-40"
                        value={editIndex.name}
                        onChange={(e) => setEditIndex({ ...editIndex, name: e.target.value })}
                      />
                      <input
                        className="border p-2 rounded w-full"
                        value={editIndex.link}
                        onChange={(e) => setEditIndex({ ...editIndex, link: e.target.value })}
                      />
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded"
                        onClick={saveEdit}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      <div>
                        <strong>{item.name}</strong>
                        <div className="text-sm text-blue-700">{item.link}</div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          className="bg-yellow-500 text-white px-3 py-1 rounded"
                          onClick={() =>
                            setEditIndex({ index, name: item.name, link: item.link })
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="bg-red-600 text-white px-3 py-1 rounded"
                          onClick={() => deleteItem(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
