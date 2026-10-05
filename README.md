# Flashcard Phẫu thuật 🔪

App flashcard học **kỹ thuật phẫu thuật cơ bản** cho người chuẩn bị vào phòng mổ lần đầu
(dụng cụ · kim chỉ · nút & mũi khâu · vô trùng & quy trình phòng mổ).

- **97 thẻ / 5 bộ** (Dụng cụ · Kim & chỉ · Nút & mũi khâu · Vô trùng & phòng mổ · Ống thông & dẫn lưu), hình minh họa SVG tự vẽ, thuật ngữ song ngữ Việt–Anh theo cách gọi tại phòng mổ VN.
- **Sprint 1 tuần theo cong lãng quên**: 20 thẻ mới/ngày (hết vòng 1 trong 5 ngày), nhịp ôn 1–2–3–5–8 ngày — mỗi thẻ được chạm lại 3–5 lần trong tuần, đúng trước khi kịp quên.
- **PWA**: cài lên màn hình chính điện thoại, chạy offline sau lần mở đầu.
- **Sao lưu tiến độ**: tab Thống kê → xuất/nạp mã sao lưu khi đổi máy.
- Tiến độ lưu trong localStorage của từng thiết bị.

## Cài lên điện thoại

Mở link GitHub Pages → menu Chrome → **"Thêm vào màn hình chính"** → mở như app bình thường, dùng được không có mạng.

## Nguồn nội dung

Tổng hợp theo slide Ngoại khoa cơ sở ĐH Y Dược TP.HCM (ThS.BS Huỳnh Bá Tấn — dụng cụ & vô khuẩn; ThS.BS Trần Đức Huy — kim chỉ),
*Surgical Care at the District Hospital* (WHO, bản dịch tiếng Việt) và QĐ 3916/QĐ-BYT về kiểm soát nhiễm khuẩn.
Xem bản gốc tài liệu trong vault cá nhân (`02 KỸ THUẬT PHẪU THUẬT/Tài liệu nguồn`).

## Cập nhật nội dung

Sửa `index.html` (bản gốc nằm trong vault ZCode) → copy đè → commit → push.
Service worker tự dọn cache cũ; người dùng refresh 2 lần (hoặc đóng mở app) là nhận bản mới.
Nhớ bump `CACHE` trong `sw.js` khi thay đổi lớn.
