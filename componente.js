class Componente extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const div = document.createElement("div");
    div.className = "card mb-3 mt-3";
    div.innerHTML = `

        <div class="row">
            <div class="col-8.5">
                <div class="card-group">
                    <div class="card">
                        <img src="https://a-static.mlcdn.com.br/800x560/kit-refil-gel-base-volia-12g-gel-classic-pink-14g-2-potes/lukcosmeticosltda/3121/2910fa88622d345ab46e62fdfd5f8f5f.jpeg" 
                        class="card-img-top" alt="Kit de géis + potes" width="260" height="125"><br>
                        <div class="card-body">
                            <p class="card-title font-weight-bold"> Kit Refil Gel Base Volia 12g <br> + Gel Classic Pink 14g + 2 potes </p>
                            <h6 class="card-text font-size"> De: R$120,00 </h6>
                            <h4 class="card-text font-size"> Por: R$98,90 á vista</h4>
                            <h6><small class="text-body-secondary"> ou 3x de R$32,90 sem juros </small></h6>
        
                            <a href="kitgeis.html" style="color: #EF4D5C;"> DETALHES DO PRODUTO </a>
                            <a href="carrinho.html" class="btn fundo"> Adicionar ao Carrinho </a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://acdn.mitiendanube.com/stores/849/092/products/111-87a81690b1f72809e416753585900068-640-0.webp"
                        class="card-img-top" alt="Esmaltes em gel" width="260" height="125"><br>
                        <div class="card-body">
                            <p class="card-title font-weight-bold"> Esmaltes em Gel Volia 9g </p>
                            <h6 class="card-text font-size"> De: R$50,00 cada </h6>
                            <h4 class="card-text font-size"> Por: R$40,00 cada </h4>
        
                            <a href="kitgeis.html" style="color: #EF4D5C;"> DETALHES DO PRODUTO </a>
                            <a href="carrinho.html" class="btn fundo"> Adicionar ao Carrinho </a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://images-americanas.b2w.io/produtos/4514014573/imagens/kit-5-und-unha-gel-fibra-sculpting-gel-real-love-uv-led/4514014573_1_large.jpg" 
                        class="card-img-top" alt="Gel" width="260" height="125"><br>
                        <div class="card-body">
                            <p class="card-title font-weight-bold"> Kit 5 Géis da Real Love </p>
                            <h6 class="card-text font-size"> De: R$90,00  </h6>
                            <h4 class="card-text font-weight-bold"> Por: R$79,90 á vista </h4>
                            <h6><small class="text-body-secondary"> ou 3x R$27,60 sem juros </small></h6>  
                
                            <a href="kitgeis.html" style="color: #EF4D5C;"> DETALHES DO PRODUTO </a>
                            <a href="carrinho.html" class="btn fundo"> Adicionar ao Carrinho </a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_789531-MLB70775906302_072023-O.webp" class="card-img-top" alt="Gel" width="260" height="125"><br>
                        <div class="card-body">
                            <p class="card-title font-weight-bold"> Kit Iniciante Vòlia Nail Designer - <br> Unha Fibra De Vidro </p>
                            <h6 class="card-text font-size"> De: R$849,90  </h6>
                            <h4 class="card-text font-weight-bold"> Por: R$799,90 á vista </h4>
                            <h6><small class="text-body-secondary"> ou 5x R$159,90 sem juros </small></h6>
                
                            <a href="kitgeis.html" style="color: #EF4D5C;"> DETALHES DO PRODUTO </a>
                            <a href="carrinho.html" class="btn fundo"> Adicionar ao Carrinho </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    `;
    this.appendChild(div);
  }

}

customElements.define("componente-novo", Componente);
