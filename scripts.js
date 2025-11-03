/* script.js — version grille cartes produits populaires + panier dynamique */

// ----- Produits (exemples) -----
const PRODUCTS = [
    {
      id: 'p1',
      name: 'Chaussure italienne',
      category: 'Mode',
      price: 15000,
      oldPrice: 25000,
      img: 'https://i.pinimg.com/1200x/d8/e0/1e/d8e01ebf4340abb5b6bfc72d382f78b1.jpg'
    },
    {
      id: 'p2',
      name: 'Lampe de chevet',
      category: 'Maison',
      price: 10000,
      oldPrice: 15000,
      img: 'https://i.pinimg.com/736x/c7/55/e4/c755e4459a17e177fe755214b0730b13.jpg'
    },
    {
      id: 'p3',
      name: 'Montre connectée',
      category: 'Électronique',
      price: 15000,
      img: 'https://i.pinimg.com/1200x/d5/a7/d0/d5a7d05d56d6a4da06a95cded24dda11.jpg'
    },
    {
      id: 'p4',
      name: 'Alter de sport',
      category: 'Sport',
      price: 10000,
      img: 'https://i.pinimg.com/736x/19/6d/ea/196deada848d46b33f0f1a789bba8f98.jpg'
    },
    {
      id: 'p5',
      name: 'Cardigan en laine',
      category: 'Mode',
      price: 5000,
      img: 'https://i.pinimg.com/736x/1d/2f/e4/1d2fe4450bba74d9af6c2c709c9deb09.jpg'
    },
    {
      id: 'p6',
      name: 'Tapis de gym',
      category: 'Sport',
      price: 8000,
      oldPrice: 12000,
      img: 'https://i.pinimg.com/736x/45/02/86/45028694f0d5c548ee8e6a553216ea59.jpg'
    },
    {
      id: 'p7',
      name: 'Vases Décoratifs',
      category: 'Maison',
      price: 30000,
      img: 'https://i.pinimg.com/1200x/0e/d6/91/0ed691b6d604b6300abf9f2ee3e3a631.jpg'
    },
    {
      id: 'p8',
      name: 'Fauteuil cocon',
      category: 'Maison',
      price: 35000,
      img: 'https://i.pinimg.com/1200x/92/f6/e9/92f6e91e74fac1db4dcfb8d038021c59.jpg'
    },
    {
      id: 'p9',
      name: 'Sac cabas',
      category: 'Mode',
      price: 17500,
      img: 'https://i.pinimg.com/736x/d2/de/aa/d2deaabcc01d7d09ba5b882b77003427.jpg'
    },
    {
      id: 'p10',
      name: 'Street-wear',
      category: 'Mode',
      price: 12500,
      img: 'https://i.pinimg.com/1200x/32/af/f4/32aff428a5adecfcf68fbb4ec13e2a5d.jpg'
    },
    {
      id: 'p11',
      name: 'T-shirt oversid',
      category: 'Mode',
      price: 2000,
      oldPrice: 2500,
      img: 'https://i.pinimg.com/1200x/5c/c5/47/5cc547f31cf1060f9a99ab6c9de3b63d.jpg'
    },
    {
      id: 'p12',
      name: 'T-shirt sport feminin',
      category: 'Sport',
      price: 3000,
      img: 'https://i.pinimg.com/1200x/74/dc/d9/74dcd9d5e6e9880c90abf43dd16307a3.jpg'
    }
  ];
  
  // ----- Utilitaires -----
  const CART_KEY = 'shopezz_cart_v1';
  
  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error('Erreur lecture cart', e);
      return {};
    }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
  function formatFCFA(n) {
    return n.toLocaleString('fr-FR') + ' FCFA';
  }
  
  // ----- Rendu des produits -----
  function renderProducts(products = PRODUCTS) {
    const container = document.getElementById('products');
    if (!container) return;
    container.innerHTML = '<div class="row g-4"></div>';
    const row = container.querySelector('.row');
  
    products.forEach(p => {
      const col = document.createElement('div');
      col.className = 'col-6 col-md-4 col-lg-3';
      col.innerHTML = `
        <div class="card h-100 shadow-sm border-0">
          <img src="${p.img}" class="card-img-top" alt="${p.name}" style="height:220px;object-fit:cover;">
          <div class="card-body text-center">
            <h6 class="card-title fw-semibold">${p.name}</h6>
            <p class="text-muted small mb-1">${p.category}</p>
           <p class="mb-2">
             ${p.oldPrice ? `<span class="text-decoration-line-through text-danger small d-block">${formatFCFA(p.oldPrice)}</span>` : ''}
             <strong>${formatFCFA(p.price)}</strong>
           </p>
  
            <div class="d-flex justify-content-center align-items-center mb-2">
              <input type="number" min="1" value="1" class="form-control form-control-sm w-25 me-2 qty-input" data-id="${p.id}">
              <button class="btn btn-warning btn-sm add-btn" data-id="${p.id}">
                <span class="material-icons" style="font-size:18px;vertical-align:middle;">add_shopping_cart</span>
              </button>
            </div>
          </div>
        </div>
      `;
      row.appendChild(col);
    });
  
    document.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        const input = document.querySelector(`.qty-input[data-id="${id}"]`);
        const qty = Math.max(1, parseInt(input.value) || 1);
        addToCart(id, qty);
        toast('Produit ajouté au panier 🛍️');
      });
    });
  }
  
  // ----- Toast simple -----
  function toast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.position = 'fixed';
    t.style.bottom = '18px';
    t.style.right = '18px';
    t.style.background = '#0b2b4a';
    t.style.color = '#fff';
    t.style.padding = '10px 14px';
    t.style.borderRadius = '10px';
    t.style.zIndex = 9999;
    t.style.boxShadow = '0 8px 18px rgba(11,43,74,0.2)';
    document.body.appendChild(t);
    setTimeout(() => { t.style.transition = 'opacity 300ms'; t.style.opacity = 0; }, 1200);
    setTimeout(() => t.remove(), 1600);
  }
  
  // ----- Gestion du panier -----
  function addToCart(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const cart = loadCart();
    if (cart[productId]) cart[productId].qty += qty;
    else cart[productId] = { id: productId, qty: qty };
    saveCart(cart);
    updateCartCount();
  }
  
  function setQty(productId, qty) {
    const cart = loadCart();
    if (!cart[productId]) return;
    if (qty <= 0) delete cart[productId];
    else cart[productId].qty = qty;
    saveCart(cart);
    renderCartView();
    updateCartCount();
  }
  
  function removeFromCart(productId) {
    const cart = loadCart();
    if (cart[productId]) {
      delete cart[productId];
      saveCart(cart);
      renderCartView();
      updateCartCount();
    }
  }
  
  function clearCart() {
    localStorage.removeItem(CART_KEY);
    renderCartView();
    updateCartCount();
  }
  
  function cartTotal() {
    const cart = loadCart();
    let total = 0;
    Object.keys(cart).forEach(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (p) total += p.price * cart[id].qty;
    });
    return total;
  }
  
  // ----- Badge panier -----
  function updateCartCount() {
    const cart = loadCart();
    let count = 0;
    Object.values(cart).forEach(i => count += i.qty);
    const badge = document.getElementById('cart-count');
    if (badge) badge.textContent = count;
  }
  
  // ----- Vue panier -----
  function renderCartView() {
    const el = document.getElementById('cart-view');
    if (!el) return;
    const cart = loadCart();
    const ids = Object.keys(cart);
  
    if (ids.length === 0) {
      el.innerHTML = `<div class="text-center py-5"><h3>🛒 Ton panier est vide</h3><p>Ajoute des produits depuis la page d’accueil.</p></div>`;
      return;
    }
  
    const list = document.createElement('div');
    list.className = 'cart-list';
  
    ids.forEach(id => {
      const item = cart[id];
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      const node = document.createElement('div');
      node.className = 'd-flex justify-content-between align-items-center border rounded p-3 mb-3 shadow-sm bg-white';
      node.innerHTML = `
        <div class="d-flex align-items-center gap-3">
          <img src="${p.img}" alt="${p.name}" style="width:80px;height:70px;object-fit:cover;border-radius:8px;">
          <div>
            <h6>${p.name}</h6>
            <small class="text-muted">${formatFCFA(p.price)} / unité</small>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-outline-secondary btn-sm" data-action="dec" data-id="${id}">−</button>
          <input class="form-control form-control-sm text-center" style="width:70px" type="number" min="1" value="${item.qty}" data-id="${id}">
          <button class="btn btn-outline-secondary btn-sm" data-action="inc" data-id="${id}">+</button>
          <button class="btn btn-danger btn-sm" data-action="rm" data-id="${id}">Supprimer</button>
        </div>
      `;
      list.appendChild(node);
    });
  
    const totalDiv = document.createElement('div');
    totalDiv.className = 'd-flex justify-content-between align-items-center bg-light p-3 rounded shadow-sm';
    totalDiv.innerHTML = `
      <div><strong>Total :</strong> ${formatFCFA(cartTotal())}</div>
      <button id="checkoutBtn" class="btn btn-primary">Payer via WhatsApp</button>
    `;
  
    el.innerHTML = '';
    el.appendChild(list);
    el.appendChild(totalDiv);
  
    el.querySelectorAll('[data-action="dec"]').forEach(b => {
      b.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        const input = el.querySelector(`input[data-id="${id}"]`);
        let v = parseInt(input.value) || 1;
        if (v > 1) v--;
        input.value = v;
        setQty(id, v);
      });
    });
    el.querySelectorAll('[data-action="inc"]').forEach(b => {
      b.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        const input = el.querySelector(`input[data-id="${id}"]`);
        let v = parseInt(input.value) || 1;
        v++;
        input.value = v;
        setQty(id, v);
      });
    });
    el.querySelectorAll('[data-action="rm"]').forEach(b => {
      b.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        removeFromCart(id);
      });
    });
  
  
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const cartObj = loadCart(); // ton objet panier
        const cartIds = Object.keys(cartObj);
    
        if (!user) {
          alert('Veuillez vous connecter pour finaliser la commande.');
          window.location.href = 'account.html';
          return;
        }
    
        if (cartIds.length === 0) {
          alert('Votre panier est vide.');
          return;
        }
    
        // Crée un tableau de produits avec info
        const cartArray = cartIds.map(id => {
          const p = PRODUCTS.find(x => x.id === id);
          return { name: p.name, price: p.price, qty: cartObj[id].qty };
        });
    
        const total = cartArray.reduce((sum, item) => sum + item.price * item.qty, 0);
    
        // Message WhatsApp
        const phoneNumber = '237689665893'; // ton numéro
        const message =
          `Bonjour 👋, je souhaite confirmer ma commande sur Shopezz.%0A%0A` +
          cartArray.map(item => `• ${item.name} (${item.qty} x ${item.price.toLocaleString()} FCFA)`).join('%0A') +
          `%0A%0A💰 Total : ${total.toLocaleString()} FCFA%0A` +
          `%0A👤 Nom : ${user.name}%0A📧 Email : ${user.email}`;
    
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
        // Enregistrer la commande
        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        existingOrders.push({ id: Date.now(), date: new Date().toLocaleDateString(), items: cartArray, total });
        localStorage.setItem('orders', JSON.stringify(existingOrders));
    
        // Vider le panier
        clearCart();
    
        // Rediriger vers WhatsApp
        window.location.href = whatsappUrl;
      });
    }
  }
       
  
  // ----- Init -----
  document.addEventListener('DOMContentLoaded', () => {
    const backBtnContainer = document.getElementById('backBtnContainer');
    const backBtn = document.getElementById('backBtn');
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
    
    renderProducts();
    renderCartView();
    updateCartCount();
  
    // ----- Filtrage par catégories -----
    function filterProductsByCategory(category) {
      const container = document.getElementById('products');
      if (!container) return;
  
      container.style.opacity = 0;
  
      setTimeout(() => {
        const filtered = PRODUCTS.filter(p => p.category === category);
        backBtnContainer.style.display = 'block';
        setTimeout(() => backBtnContainer.style.opacity = 1, 100);
  
        renderProducts(filtered);
        container.style.opacity = 1;
      }, 200);
    }
  
    // ----- Activation clic catégories -----
    document.querySelectorAll('.category-card').forEach(cat => {
      cat.addEventListener('click', e => {
        const category = e.currentTarget.dataset.category;
        filterProductsByCategory(category);
      });
    });
  
    // ----- Bouton Retour à l’accueil -----
    backBtn.addEventListener('click', () => {
      backBtnContainer.style.opacity = 0;
      setTimeout(() => {
        backBtnContainer.style.display = 'none';
      }, 300);
  
      const container = document.getElementById('products');
      container.style.opacity = 0;
      setTimeout(() => {
        renderProducts();
        container.style.opacity = 1;
      }, 200);
    });
    backBtnContainer.style.display = 'none';
    backBtnContainer.style.opacity = 0;
  
    // ----- Recherche dynamique par nom de produit -----
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(query));
        renderProducts(filtered);
      });
    }
  });

  
// ---------- Gestion du compte utilisateur ----------

// Vérifie si un utilisateur est connecté au chargement
document.addEventListener("DOMContentLoaded", () => {
  const accountBtn = document.getElementById("accountBtn");
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    accountBtn.textContent = "Mon compte";
    accountBtn.classList.replace("btn-outline-primary", "btn-success");
  }

  accountBtn.addEventListener("click", () => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      // Si déjà connecté → proposer déconnexion
      if (confirm(`Déjà connecté en tant que ${currentUser.name}. Se déconnecter ?`)) {
        localStorage.removeItem("user");
        accountBtn.textContent = "Connexion";
        accountBtn.classList.replace("btn-success", "btn-outline-primary");
      }
    } else {
      // Si pas connecté → ouvrir un petit formulaire
      openLoginModal();
    }
  });
});

// ---------- Création du modal de connexion ----------
function openLoginModal() {
  const modalHTML = `
    <div class="modal fade" id="loginModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
          <h5 class="modal-title text-center mb-3">Connexion / Inscription</h5>
          <div class="mb-3">
            <input type="text" id="nameInput" class="form-control" placeholder="Nom complet">
          </div>
          <div class="mb-3">
            <input type="email" id="emailInput" class="form-control" placeholder="Adresse e-mail">
          </div>
          <button id="saveUserBtn" class="btn btn-primary w-100">Se connecter</button>
        </div>
      </div>
    </div>
  `;

  // Injecte le modal si non présent
  if (!document.getElementById("loginModal")) {
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }

  const modal = new bootstrap.Modal(document.getElementById("loginModal"));
  modal.show();

  document.getElementById("saveUserBtn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();

    if (!name || !email) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const user = { name, email };
    localStorage.setItem("user", JSON.stringify(user));
    modal.hide();

    // Mettre à jour le bouton
    const accountBtn = document.getElementById("accountBtn");
    accountBtn.textContent = "Mon compte";
    accountBtn.classList.replace("btn-outline-primary", "btn-success");

    alert(`Bienvenue, ${name} ! Vous êtes maintenant connecté.`);
  });
}
