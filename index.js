let axios = require('axios');
let fs = require('fs');
require('dotenv').config();

let headersList = {
    "Accept": "*/*",
    "Authorization": "Bearer " + process.env.TOKEN,
}

let formdata = new FormData();
formdata.append("SupplierCode", "1");
formdata.append("DocumentType", "1");

const fileUpload = {
    fileName: "dummy.pdf",
    mediaType: 'application/pdf',
    buffer: fs.createReadStream("./dummy.pdf"),
};
formdata.append('FileUpload', JSON.stringify(fileUpload));

let reqOptions = {
    url: "https://api-sa.myfatoorah.com/v2/UploadSupplierDocument",
    method: "PUT",
    headers: headersList,
    data: formdata,
}

let response = axios.request(reqOptions).then((response) => {
    console.log(response.data);
}).catch((err) => {
    console.log(err.response.data);
});
