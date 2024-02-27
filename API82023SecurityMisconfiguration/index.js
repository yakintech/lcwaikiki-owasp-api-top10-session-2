const app = require('express')();

const cors = require('cors');

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
} )



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

//varsayılan parolalar ve hesaplar. Örneğin "admin: admin", "root: root", "user: user" vb.

// açık hata mesajlarında gizli bilgilerimizi göstermemeliyiz. Örneğin database bağlantı bilgileri, hata mesajlarında gösterilmemeli.

//Paket yönetimi. Örneğin npm paketlerinin güncel olup olmadığı, güvenlik açıkları olup olmadığı kontrol edilmeli.

//Güvenlik duvarı (firewall) kurulumu. Örneğin, gelen isteklerin kaynağının güvenilir olup olmadığı kontrol edilmeli.

// CORS yapılandırması. Örneğin sadece belirli domainlerden gelen isteklerin kabul edilmesi.