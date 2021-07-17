
document.addEventListener("DOMContentLoaded",async function()
{
        let path= "http://127.0.0.1:3000/api/products/all";

        const states = {
            Done: 4
        };
        const httpStatusCodes = {
            Ok: 200,
            NotFound: 404
        };

        const result = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open('GET', path);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === states.Done) {
                    switch (xhr.status) {
                        case httpStatusCodes.Ok:
                            resolve(JSON.parse(xhr.response));
                            resolve(xhr.response);
                            break;
                        case httpStatusCodes.NotFound:
                            reject('page not found');
                            break;
                    }
                }
            };
            setTimeout(() => xhr.send(), 100);
        });

        try {

            const objpeople = await result;
            console.log(objpeople);
            let block = document.querySelector("#divCrds");

            block.innerHTML="";

            for(let i =0 ;i<objpeople.length;i++){
            
            let div = document.createElement('div');
            div.setAttribute('class','card');
            div.style.margin="3%";
            div.style.width="18rem";

              let img = document.createElement('img');
                  img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUK9ZMPMmOjnNKoRDexfyOC6L5FWGSfe92A&usqp=CAU";
                  img.setAttribute('class','card-img-top');
              let div1 = document.createElement('div');
              div1.setAttribute('class','card-body');

              div.appendChild(img);
              div.appendChild(div1);

              let h5 = document.createElement('h5');
              h5.setAttribute('class','card-title');
              h5.innerText=objpeople[i].nameproduct;
              let p = document.createElement('p');
              p.setAttribute('class','card-text');
              p.innerText="Some quick example text to build on the card title and make up the bulk o";

              div1.appendChild(img);
              div1.appendChild(h5);
              div1.appendChild(p);

              let divBtnStyle = document.createElement('div');
              let detailBtn = document.createElement('button');
              let price = document.createElement('button');

              divBtnStyle.setAttribute('class','btn-style');
              div1.appendChild(divBtnStyle);

              detailBtn.setAttribute('id',`${objpeople[i].nameproduct}`);
              detailBtn.setAttribute('name','BtnDetails');
              detailBtn.setAttribute('type','button');
              detailBtn.setAttribute('class','btn btn-primary');
              detailBtn.innerText="Details";
              detailBtn.style.background="#FFC107";

              divBtnStyle.appendChild(detailBtn);

              price.innerText=`${objpeople[i].price}`;
              price.setAttribute('class','btn btn-primary');
              price.style.background="#FFC107";

              divBtnStyle.appendChild(price);
              block.appendChild(div);
              
            }
            PageDetails();

        } catch (err) {

            console.log('ERROR', err);
        }
});


function PageDetails() {

    let btns=document.getElementsByName("BtnDetails");
    console.log(btns);
        btns.forEach(btn=>{
            btn.onclick = async function(ev) {
            let prodId=String(btn.getAttribute('id'));          
            localStorage.setItem("nameProduct",prodId);
            window.location.replace("http://127.0.0.1:5500/src/detail.html");
        }
    });
}