# intro
- Theo mặc định thì tất cả các pages trong Nextjs đều được render ra trước
- Có 2 hình thức render trước là:
    - Static Generation: HTML được tạo ra tại thời điểm build, và sẽ được sử dụng lại mỗi lần request.
    - Server-side Rendering: HTML sẽ được tạo ra ở mỗi lần request.
- NextJS cho phép chọn kiểu render cho từng trang. Khuyến khích sử dụng Static Generation.
- Còn kiểu render phía máy khách (Client-side Rendering)

## Guide
- Các cách để fetch data phù hợp với từng kiểu render (SSG, SSR)
- Thêm css file và sass với file `_app.js`
- Tối ưu ảnh với nextjs
- Sử dụng file tĩnh - Static File Serving
- Sử dụng file biến môi trường `.env`
- Routing introduction
- Điều hướng với next.useRouter() (không cần dùng thẻ a hoặc Link component)

## Notes

- Những file `env` có đuôi `.local` là những file cần private. Nó hơi ngược so với thông thường 
nhưng đó là quy định trong Nextjs