Jika error karena akan di panggil ke 'client'

useShallowEffect(() => {
    if (typeof window !== undefined) {
      const data = localStorage.getItem("total_harga");
      setTotal(data);
    }
  }, []);
