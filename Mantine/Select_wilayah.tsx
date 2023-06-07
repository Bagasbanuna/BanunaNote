
function Select_Wilayah(){
return <>

<Select
     data={sProvinsi.value.map((e) => ({
       value: e.id,
       label: e.name,
     }))}
     onChange={_loadKabkot}
     radius={"md"}
     mt={10}
     placeholder="Pilih Provinsi"
     label="Pilih Provinsi"
     searchable
     clearable
     withAsterisk
   />
   <Select
     data={sKabkot.value.map((e) => ({
       value: e.id,
       label: e.name,
     }))}
     onChange={_loadKecamatan}
     radius={"md"}
     mt={10}
     placeholder="Pilih Kabupaten / Kota"
     label="Pilih Kabupaten / Kota"
     withAsterisk
     searchable
     clearable
   />
   <Select
     data={sKecamatan.value.map((e) => ({
       value: e.id,
       label: e.name,
     }))}
     onChange={_loadDesa}
     radius={"md"}
     mt={10}
     placeholder="Pilih Kecamatan"
     label="Pilih Kecamatan"
     withAsterisk
     searchable
     clearable
   />
   <Select
     data={sDesa.value.map((e) => ({
       value: e.id,
       label: e.name,
     }))}
     radius={"md"}
     mt={10}
     placeholder="Pilih Desa"
     label="Pilih Desa"
     withAsterisk
     searchable
     clearable
   />

<>

}
