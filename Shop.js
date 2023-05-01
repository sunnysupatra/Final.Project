var product = [{
    id: 1,
    img: 'https://www.feedmeplease.com/images/pdimg/4223/1.webp',
    name: 'Kaniva Mother Cat & Kitten',
    price: 1290,
    description: 'คานิว่า อาหารเม็ด สูตรสำหรับแม่แมว และลูกแมวอายุ 3 สัปดาห์ - 1 ปี ',
    type: 'Cat Food'
}, {
    id: 2,
    img:'https://images-ext-2.discordapp.net/external/MqDrxvBE1riQe5k-EzDwwEqTsszcHDYwpF5a84e0BpM/https/cf.shopee.co.th/file/2b6fe5ddbaccdd79c2552f8d1eae9949?width=676&height=676',
    name:'Royal Canin Mini Adult',
    price: 579,
    description: 'โรยัล คานิน อาหารเม็ด สำหรับสุนัขสูงวัยเลี้ยงในบ้าน สายพันธุ์เล็ก',
    type:'Dog Food'
}, {
    id: 3,
    img:'https://media.discordapp.net/attachments/974239808320831520/1102673494933778492/KF_2.png?width=676&height=676',
    name:'Kaniva Lamb,Tuna & Rice',
    price: 1290,
    description: 'คานิว่า อาหารเม็ด สูตรเนื้อแกะ ทูน่า และข้าว',
    type:'Cat Food'
}, {
    id: 4,
    img:'https://media.discordapp.net/attachments/974239808320831520/1102676259688951899/RC_2.png?width=676&height=676',
    name:'Royal Canin Mini Puppy',
    price: 579,
    description: 'โรยัล คานิน อาหารเม็ด สำหรับลูกสุนัขสายพันธุ์เล็ก',
    type:'Dog Food'
}, {
    id: 5,
    img:'https://media.discordapp.net/attachments/974239808320831520/1102676260049670204/RC_3.png?width=676&height=676',
    name:'Royal Canin Adult (very small dogs)',
    price: 579,
    description: 'โรยัล คานิน อาหารเม็ด สำหรับสุนัขโตสายพันธุ์เล็กพิเศษ',
    type:'Dog Food'
}, {
    id: 6,
    img:'https://media.discordapp.net/attachments/974239808320831520/1102676261358272512/KF_3.png?width=676&height=676',
    name:'Kaniva Chicken, Tuna & Rice',
    price: 1290,
    description: 'คานิว่า อาหารเม็ด เนื้อไก่ ปลาทูน่า และข้าว',
    type:'Cat Food'
}, {
    id: 7,
    img:'https://media.discordapp.net/attachments/974239808320831520/1102676261752557629/KF_4.png?width=676&height=676',
    name:'Kaniva Tuna topping Salmon',
    price: 35,
    description: 'คานิว่า เนื้อปลาทูน่าหน้าเนื้อปลาแซลมอนในเยลลี่ สำหรับลูกแมวและแมวโต',
    type:'Cat Food'
}, {
    id: 8,
    img:'https://media.discordapp.net/attachments/974239808320831520/1102676259357589574/KF_6.png?width=676&height=676',
    name:'Kaniva Indoor Chicken',
    price: 35,
    description: 'คานิว่า เนื้อไก่ สำหรับลูกแมวและแมวโต',
    type:'Cat Food'
}, {
    id: 9,
    img:'https://media.discordapp.net/attachments/974239808320831520/1102676260326473838/RC_4.png?width=676&height=676',
    name:'Royal Canin',
    price: 39,
    description: 'โรยัล คานิน อาหารเปียกแบบเพาช์ สำหรับสุนัขโตสายพันธุ์กลาง',
    type:'Dog Food'
}, {
    id: 10,
    img:'https://media.discordapp.net/attachments/974239808320831520/1102676260947251300/RC_6.png?width=676&height=676',
    name:'Royal Canin',
    price: 39,
    description: 'โรยัล คานิน อาหารเปียกแบบเพาช์ สำหรับลูกสุนัขสายพันธุ์ใหญ่',
    type:'Dog Food'
}, {
    id: 11,
    img:'https://media.discordapp.net/attachments/974239808320831520/1102676260615893102/RC_5.png?width=676&height=676',
    name:'Royal Canin',
    price: 39,
    description: 'โรยัล คานิน อาหารเปียกแบบเพาช์ สำหรับสุนัขสูงวันย์สายพันธ์กลาง',
    type:'Dog Food'
}, {
    id: 12,
    img:'https://media.discordapp.net/attachments/974239808320831520/1102676262260047943/KF_5.png?width=676&height=676',
    name:'Kaniva Indoor Chicken',
    price: 35,
    description: 'คานิว่า เนื้อไก่ สำหรับลูกแมวและแมวโต',
    type:'Cat Food'
}];



$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } THB</p>
                </div>`;
    }

    $("#productlist").html(html);

})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(elem) {
    // console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if( product[i].name.includes(value) ) {
            html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } THB</p>
                </div>`;
        }
    }
    if(html == '') {
        $("#productlist").html(`<p>Not found product</p>`);
    } else {
        $("#productlist").html(html);
    }

}

function searchproduct(param) {
    console.log(param)
    $(".product-items").css('display', 'none')
    if(param == 'all') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display', 'flex')
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text( numberWithCommas(product[index].price) + ' THB')
    $("#mdd-desc").text(product[index].description)
}

function closeModal() {
    $(".modal").css('display','none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if( productindex == cart[i].index ) {
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        // console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' to cart !'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display','flex')
    rendercart();
}

function rendercart() {
    if(cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="">
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${ numberWithCommas(cart[i].price * cart[i].count) } THB</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html)
    }
    else {
        $("#mycart").html(`<p>Not found product list</p>`)
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                  if(res.isConfirmed) {
                     cart.splice(index, 1) 
                     console.log(cart)
                     rendercart();
                     $("#cartcount").css('display','flex').text(cart.length)
                     
                     if(cart.length <= 0) {
                        $("#cartcount").css('display','none')
                     }
                  }  
                  else {
                    cart[index].count++;
                    $("#countitems"+index).text(cart[index].count)
                    rendercart();
                  }
                })
            }
            rendercart();
        }
        
    }
    else if(action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
        rendercart();
    }
} 