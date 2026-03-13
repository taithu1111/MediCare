# Medicare Backend API

> REST API backend cho hệ thống đặt lịch khám bệnh **MediCare**, xây dựng bằng Node.js + Express + MongoDB.

## 🛠 Tech Stack

| Công nghệ | Mô tả |
|---|---|
| Node.js + Express | Web framework |
| MongoDB + Mongoose | Database |
| Clerk SDK | Authentication & Authorization |
| Cloudinary + Multer | Upload ảnh |
| JWT | Token-based auth |
| Stripe | Thanh toán |

## 📁 Cấu trúc dự án

```
backend/
├── config/
│   └── db.js              # Kết nối MongoDB
├── controllers/
│   └── doctorController.js # Logic xử lý bác sĩ
├── middlewares/            # Auth middleware (coming soon)
├── models/
│   └── Doctor.js          # Schema bác sĩ
├── routes/                # API routes (coming soon)
├── utils/
│   └── cloudinary.js      # Upload/delete ảnh
├── .env.example           # Template biến môi trường
├── server.js              # Entry point
└── package.json
```

## ⚙️ Setup

1. **Clone repo**
   ```bash
   git clone https://github.com/<your-username>/medicare-backend.git
   cd medicare-backend
   ```

2. **Cài dependencies**
   ```bash
   npm install
   ```

3. **Cấu hình môi trường**
   ```bash
   cp .env.example .env
   # Điền các giá trị vào .env
   ```

4. **Chạy server**
   ```bash
   npm start
   ```
   Server chạy tại `http://localhost:4000`

## 🔑 Biến môi trường

Xem file [`.env.example`](.env.example) để biết các biến cần thiết.

## 📌 API Endpoints

| Method | Endpoint | Mô tả |
|---|---|---|
| GET | `/` | Health check |
| POST | `/api/doctors` | Tạo bác sĩ mới |
| GET | `/api/doctors` | Lấy danh sách bác sĩ |

> ⚠️ Dự án đang trong quá trình phát triển.
