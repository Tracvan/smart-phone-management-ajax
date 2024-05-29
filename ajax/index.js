let number = 1;
function addNewSmartPhone() {
    //lấy dữ liệu từ form html
    let producer = $('#producer').val();
    let model = $('#model').val();
    let price = $('#price').val();
    let newSmartphone = {
        producer: producer,
        model: model,
        price: price
    };
    // gọi phương thức ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newSmartphone),
        //tên API
        url: "http://localhost:8080/api/smartphones",
        //xử lý khi thành công
        success: successHandler(number)

    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}

function successHandler(number) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/smartphones?page=" + number,
        success: function (data) {
            // hiển thị danh sách ở đây
            let content = '<table id="display-list"  border="1"><tr>\n' +
                '        <th>Producer</td>\n' +
                '        <th>Model</td>\n' +
                '        <th>Price</td>\n' +
                '        <th>Delete</td>\n' +
                '    </tr>';
            console.log(typeof data.content.length)
            for (let i = 0; i < data.content.length; i++) {
                content += getSmartphone(data.content[i]);
            }
            content += "</table>"
            content += "<br> "
            if(!data.content.last){
                number += 1;
                content += '<button onclick="successHandler(' + number + ')">Next</button>'
            document.getElementById('smartphoneList').innerHTML = content;

            }

        }
    });
    event.preventDefault();
}

function displayFormCreate() {
    document.getElementById('smartphoneList').style.display = "block";
    document.getElementById('add-smartphone').style.display = "block";
    document.getElementById('display-create').style.display = "block";
    document.getElementById('title').style.display = "block";
}

function getSmartphone(smartphone) {
    return `<tr><td >${smartphone.producer}</td><td >${smartphone.model}</td><td >${smartphone.price}</td>` +
        `<td class="btn"><button class="deleteSmartphone" onclick="deleteSmartphone(${smartphone.id})">Delete</button></td></tr>`;
}

function deleteSmartphone(id) {
    $.ajax({
        type: "DELETE",
        //tên API
        url: `http://localhost:8080/api/smartphones/${id}`,
        success: successHandler,
    });
    event.preventDefault();

}