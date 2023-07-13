<h3>Download and Install</h3>
Download docker di(Apple Chip) : [Docker Dekstop](https://www.docker.com/products/docker-desktop/).
Setelah selesai install dan masuk tanpa akun

<h3>Cek dan Run: **Terminal**</h3>
Buka terminal
- Cek apakah sudah ada docker di pc user: docker -v
- Cek id : docker ps
**CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES**

Kalau belum ada maka jalankan: docker pull postgres
*perintah ini akan mendownload*

Jika sudah maka ketik: docker run -d --name bip-db -e "POSTGRES_PASSWORD=Production_123" -e "POSTGRES_USER=bip" -p 5433:5432 postgres
*akan keluar kode random kemuadian jalankan docker ps lagi dan hasilnya*
CONTAINER ID   IMAGE      COMMAND                  CREATED         STATUS         PORTS                    NAMES
b2f94a6b3072   postgres   "docker-entrypoint.s…"   3 seconds ago   Up 3 seconds   0.0.0.0:5433->5432/tcp   bip-db
*di terminal sudah selesai*

<h3>Cek dan Run: **Visual Studio Code**</h3>
Run:
> yarn add @prisma/client 
> prisma init
*jika belum install*

Kemudian Run:
> docker exec -it bip-db bash
akan muncul: root@b2f94a6b3072:/#
> run: psql -U bip -d postgres
untuk lihat list run : \l
atau ikuti cara mas malik:
> \d
> \u
> \q
> exit
*hanya untuk melihat table di terminalnya*

Kemudian buka env.
*Dan rubah pengaturan port dan db nya*
DATABASE_URL="postgresql://bip:Production_123@localhost:5433/mydb?schema=public"

Buka schema.prisma 
*isi modelnya sebagai contoh*
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id String @id @default(cuid())
}

Kemudian run:
>  npx prisma db push

Masuk ke DB dan tambah connection
1. Pilih Server type (ganti postgras)
2. Username > bip
3. Port > 5433
4. Pass > Sesuai dengan pass db
5. Klik connet
6. Jika success maka save dan klik tombol reset dan cek db nya
   **Selesai**
