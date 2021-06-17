# intro

Chú ý: 3 file sẽ mặc định bị git bỏ qua là:`.env.local`, `.env.development.local`, `.env.production.local`

Nextjs sẽ load tất cả các thuôc tính trong file `.env.local`

Đôi khi chúng ta cần các giá trị khác nhau giữa các môi trường (ví dụ `development` và `production`) thì chúng ta sẽ thêm 2 file là `.env.development.local` và `.env.production.local`

Giá trị trong file `.env.development.local` và `.env.production.local` sẽ ghi đè lên giá trị trong `.env.local`

## Khi run và build 

- Khi chạy lênh `yarn dev` thì nextjs sẽ load `.env`, `.env.local`, `.env.development`, `.env.development.local` tuỳ vào trong thư mục 
của chúng ta có những file nào 
- Khi chạy lênh `yarn build` thì nextjs sẽ load `.env`, `.env.local`, `.env.production`, `.env.production.local` tuỳ vào trong thư mục 
của chúng ta có những file nào 
