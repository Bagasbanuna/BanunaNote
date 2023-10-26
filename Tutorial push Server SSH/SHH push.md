Masukan username dan password, ex:
ssh <username> , setelah itu password
Kemudian liat filenya dengan ls
Dan cd ke project nya

untuk cek server : pm2 status

Kemudian:
ls /etc/nginx/sites-enabled , selanjutnya masukan servernya
pm2 start "yarn start --port 3000" --name bali_3000

Untuk lihat Log nya
pm2 log bali_3000
