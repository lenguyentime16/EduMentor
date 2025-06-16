import React, { useState, useEffect, useRef } from "react";

const Input = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // Hàm xử lý thay đổi input
    const handleChange = (e) => {
        const input = e.target.value;
        const onlyLetters = input.replace(/[0-9]/g, ""); // Lọc bỏ số
        setValue(onlyLetters); // Cập nhật giá trị đã lọc
        if (!onlyLetters) {
            setError('Không được để trống!');
        } else {
            setError('');
        }
    };

    // Hàm xử lý click nút Submit
    const handleSubmit = () => {
        if (value.trim() === "") {
            setError("Vui lòng nhập nội dung!");
        } else {
            alert(`Bạn đã nhập: ${value}`);
            setError(''); // Xóa lỗi sau khi submit
        }
    };

    // Hàm xóa nội dung
    const handleClear = () => {
        setValue("");
        setError(''); // Xóa lỗi khi xóa
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
            {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}
            <p style={{ marginTop: "1rem" }}>
                🔠 Đã nhập: <strong>{value}</strong>
            </p>
            <p>📏 Độ dài: {value.length} ký tự</p>
            <div style={{ marginTop: "1rem" }}>
                <button onClick={handleSubmit} style={{ padding: "0.5rem", marginRight: "0.5rem" }}>
                    Submit
                </button>
                <button onClick={handleClear} style={{ padding: "0.5rem" }}>
                    Xóa
                </button>
            </div>
        </div>
    );
};

export default Input;