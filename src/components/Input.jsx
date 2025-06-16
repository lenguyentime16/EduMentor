import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

const Input = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null); // dùng để auto focus

  // Auto focus khi component render lần đầu
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const input = e.target.value;

    // Không cho nhập số
    const onlyLetters = input.replace(/[0-9]/g, "");
    setValue(onlyLetters);
  };

  // Hàm xử lý click nút
  const handleSubmit = () => {
    if (value.trim() === "") {
      alert("Vui lòng nhập nội dung!");
    } else {
      alert(`Bạn đã nhập: ${value}`);
    }
  };

  const handleClear = () => {
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", maxWidth: "400px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Nhập chữ, không cho số..."
        value={value}
        onChange={handleChange}
        style={{ padding: "0.5rem", width: "100%" }}
      />

      <p style={{ marginTop: "1rem" }}>
        🔠 Đã nhập: <strong>{value}</strong>
      </p>
      <p>📏 Độ dài: {value.length} ký tự</p>
    </div>
  );
};

export default Input;
