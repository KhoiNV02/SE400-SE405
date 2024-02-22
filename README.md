# Tên Dự Án Explosive_Word_Game 

## Mô tả
[ExplosiveWord] là một bộ các trò chơi học tiếng anh kết nối nhiều người chơi trên nền tảng Website. 
## Demo: https://explosiveword.onrender.com/
## Hướng Dẫn Cài Đặt

1. **Yêu cầu Hệ Thống:**
    - Ram 4GB.
2. **Cách Cài Đặt:**
    - Clone toàn bộ code về.
    - Mở terminal, chạy lệnh 'cd nodejs' để truy cập vào folder chính.
    - Chạy lệnh 'npm i' để cài đặt tất cả các gói cần thiết.
## Hướng Dẫn Sử Dụng

1. **Khởi Chạy Trò Chơi:**
    -  Sau khi cài xong, chạy lệnh 'npm start' để khởi chạy dự án.
    - Sau khi khởi chạy thành công, truy cập vào địa chỉ 'http://localhost:3000/' để trải nghiệm ứng dụng.

2. **Cách Chơi:** (Ứng dụng hiện tại chỉ có thể chơi được trò chơi 'Harvest Festival' và trò 'Detective Word')
   Video Demo: https://www.youtube.com/watch?v=Da6vRNQ2nWY

## Tính Năng

- Trò chơi Harvest Festival: Trò chơi sắp xếp từ nhanh để giành được điểm số, mỗi phòng chơi sẽ có 4 người chơi cùng tranh tài với nhau trong 33 vòng đấu. Mỗi vòng đấu sẽ
  xuất hiện ngẫu nhiên 1 từ vựng tiếng anh bị xáo trộn vị trí mà 1 mức điểm thưởng, người nhanh nhất sắp xếp được cụm từ sẽ nhận được điểm thưởng. Khi kết thúc 33 vòng đầu,
  người chiến thằng là người có điểm số cao nhất.
  
- Trò chơi Detective Word: Trò chơi mô tả từ, mỗi phòng chơi sẽ có 4 người chơi. Khi bắt đầu mỗi vòng, các người chơi sẽ nhận được 1 từ vựng tiếng anh ngẫu nhiên, 3 người chơi
  sẽ nhận được cùng 1 từ giống nhau, và người chơi còn lại sẽ nhận được từ khác biệt hoàn toàn, nhiệm vụ của các người chơi là mô tả từ vựng mình nhận được nhưng mà không được
  để cho các người chơi khác biết được từ vựng của mình là gì, sau 45s mô tả thì sẽ tiến hành bình chọn ai là người có từ vựng khác biệt để tiến hành tiêu diệt. 
- Chat: tính năng trò chuyện trong game, có tích hợp mic để nói chuyện.
## Mô tả API
- /: Render giao diện đăng nhập của trò chơi.
- /home: Tìm kiếm để hiển thị các room hiện có (room vừa được tạo ra) để tải lên trang Home cho người dùng có thể join.
- /home/join: Kiểm tra mã code người dùng nhập vào có tồn tại trong cơ sở dữ liệu hay không, mã code này là id phòng chơi của người dùng khác đã tạo với trạng thái public.
- /HarvestFestival: Lưu trữ thông tin người chơi và tiến hành tải giao diện phòng game Harvest Festival.
- /HarvestFestival/:id :Từ phòng game tiến vào phòng chuẩn bị để bắt đầu game ( trạng thái người chơi được chuyển sang sẵn sàng).
- /HarvestFestival/edit: Cập nhật lại dữ liệu về room trong database (bao gồm việc xóa room không còn tồn tại và thêm room mới vào).
- /HarvestFestival/GetWord: Lấy ngẫu nhiêm bộ từ vựng trong database để chuẩn bị cho trò chơi.
- /DetectiveWord: Hiển thị giao diện phòng chơi để kết nối các người chơi với nhau.
## Tác Giả
- Tên tác giả: Nguyễn Văn Khôi.
- Liên hệ:khoinguyenvan2002.se@gmail.com


