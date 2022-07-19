const products = [
    {
        id: '001',
        name:'Aros Circulares',
        price: 600, 
        category: 'aros-arcilla',
        link: 'products/aros-arcilla/aros-circulares.html', 
        stock: 5,
        image:'images/products/aros-arcilla/aros-arcilla-circulo-chico-negro.jpg', 
        variacion: [
            {
                id: '001BL',
                color: 'blanco',
                image: 'images/products/aros-arcilla/aros-arcilla-circulo-chico-blanco.jpg'
            },
            {
                id: '001AM',
                color: 'amarillo',
                image: 'images/products/aros-arcilla/aros-arcilla-circulo-chico-amarillo.jpg'
            },
            {
                id: '001MD',
                color: 'mandarina',
                image: 'images/products/aros-arcilla/aros-arcilla-circulo-chico-mandarina.jpg'
            },
            {
                id: '001NE',
                color: 'negro',
                image: 'images/products/aros-arcilla/aros-arcilla-circulo-chico-negro.jpg'
            },
            {
                id: '001VD',
                color: 'verde',
                image: 'images/products/aros-arcilla/aros-arcilla-circulo-chico-verde.jpg'
            },
            {
                id: '001SL',
                color: 'salmón',
                image: 'images/products/aros-arcilla/aros-arcilla-circulo-chico-salmon.jpg'
            },
            {
                id: '001RO',
                color: 'rojo',
                image: 'images/products/aros-arcilla/aros-arcilla-circulo-chico-rojo.jpg'
            }
        ]
    },
    {
        id: '002', 
        name:'Aros Botones', 
        price: 520, 
        category: 'aros-arcilla',
        link: 'products/aros-arcilla/aros-botones.html', 
        stock: 5, 
        image:'images/products/aros-arcilla/aros-arcilla-botones-negro-naranja.jpg', 
        variacion: [
            {
                id: '002NE',
                color: 'negro',
                image: 'images/products/aros-arcilla/aros-arcilla-botones-negro.jpg'
            },
            {
                id: '002BL',
                color: 'blanco',
                image: 'images/products/aros-arcilla/aros-arcilla-botones-blanco.jpg'
            },
            {
                id: '002N-N',
                color: 'negro-naranja',
                image: 'images/products/aros-arcilla/aros-arcilla-botones-negro-naranja.jpg'
            },
            {
                id: '002B-N',
                color: 'blanco-naranja',
                image: 'images/products/aros-arcilla/aros-arcilla-botones-blanco-naranja.jpg'
            }
        ]
    },
    {
        id: '003', 
        name:'Aros Animal Print', 
        price: 550, 
        category: 'aros-arcilla', 
        link: 'products/aros-arcilla/aros-animal-print.html', 
        stock: 5, 
        image:'images/products/aros-arcilla/aros-animal-print-rojo.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '003BL',
                image: 'images/products/aros-arcilla/aros-animal-print-blanco.jpg'
            },
            {
                color: 'rojo',
                id: '003RO',
                image: 'images/products/aros-arcilla/aros-animal-print-rojo.jpg'
            },
            {
                color: 'verde',
                id: '003VD',
                image: 'images/products/aros-arcilla/aros-animal-print-verde.jpg'
            },
            {
                color: 'mandarina',
                id: '003MN',
                image: 'images/products/aros-arcilla/aros-animal-print-mandarina.jpg'
            },
            {
                color: 'mostaza',
                id: '003MZ',
                image: 'images/products/aros-arcilla/aros-animal-print-mostaza.jpg'
            },
            {
                color: 'naranja',
                id: '003NR',
                image: 'images/products/aros-arcilla/aros-animal-print-naranja.jpg'
            }
        ]
    },
    {
        id: '004', 
        name:'Aros Barquitos', 
        price: 540, 
        category: 'aros-arcilla', 
        link: 'products/aros-arcilla/aros-barquitos.html', 
        stock: 5, 
        image:'images/products/aros-arcilla/aros-arcilla-barco-pequeño-mandarina.jpg', 
        variacion: [
            {
                color: 'mandarina',
                id: '004NR',
                image: 'images/products/aros-arcilla/aros-arcilla-barco-pequeño-mandarina.jpg'
            },
            {
                color: 'negro',
                id: '004NE',
                image: 'images/products/aros-arcilla/aros-arcilla-barco-pequeño-negro.jpg'
            }
        ]
    },
    {
        id: '005', 
        name:'Aros Círculo Chico Manchas', 
        price: 540, 
        category: 'aros-arcilla',
        link: 'products/aros-arcilla/aros-circulo-chico-manchas.html', 
        stock: 5, 
        image:'images/products/aros-arcilla/aros-circulo-chico-manchas.jpg', 
        variacion: [
            {
                id: '005NR',
                color: ['blanco', 'negro', 'naranja'],
                image: 'images/products/aros-arcilla/aros-circulo-chico-manchas.jpg'
            },
            {
                id: '005NR',
                color: 'naranja',
                image: 'images/products/aros-arcilla/aros-circulo-chico-naranja-manchas.jpg'
            }
        ]
    },
    {
        id: '006', 
        name:'Aros Rendondos Manchas', 
        price: 540, 
        category: 'aros-arcilla',
        link: 'products/aros-arcilla/aros-redondos-manchas.html', 
        stock: 5, 
        image:'images/products/aros-arcilla/aros-redondos-arcilla-manchas.jpg', 
        variacion: [
            {
                id: '006MD',
                color: 'mandarina',
                image: 'images/products/aros-arcilla/aros-redondos-arcilla-manchas.jpg'
            },
        ]
    },
    {
        id: '007', 
        name:'Aros Circulo Doble Manchas', 
        price: 540, 
        category: 'aros-arcilla',
        link: 'products/aros-arcilla/aros-circulo-doble-manchas.html', 
        stock: 5, 
        image:'images/products/aros-arcilla/aros-circulo-doble-manchas.jpg', 
        variacion: [
            {
                id: '007MD',
                color: 'mandarina',
                image: 'images/products/aros-arcilla/aros-circulo-doble-manchas.jpg'
            },
        ]
    },
    {
        id: '008', 
        name:'Aros Negros Tres Piezas', 
        price: 540, 
        category: 'aros-arcilla', 
        link: 'products/aros-arcilla/aros-negros-tres-piezas.html', 
        stock: 5, 
        image:'images/products/aros-arcilla/aros-negros-tres-piezas.jpg', 
        variacion: [
            {
                id: '008MD',
                color: 'mandarina',
                image: 'images/products/aros-arcilla/aros-circulo-doble-manchas.jpg'
            },
        ]
    },
    {
        id: '009', 
        name:'Aros Pétalos', 
        price: 550, 
        category: 'aros-arcilla',
        link: 'products/aros-arcilla/aros-petalos.html', 
        stock: 5, 
        image:'images/products/aros-arcilla/aros-petalos-blancos.jpg', 
        variacion: [
            {
                id: '009BL',
                color: 'blanco',
                image: 'images/products/aros-arcilla/aros-petalos-blancos.jpg'
            }
        ]
    },
    {
        id: '010', 
        name:'Aros Redondos', 
        price: 600, 
        category: 'aros-arcilla',
        link: 'products/aros-arcilla/aros-redondos.html', 
        stock: 5, 
        image:'images/products/aros-arcilla/aros-arcilla-redondos-salmon.jpg', 
        variacion: [
            {
                id: '010BL',
                color: 'blanco',
                image: 'images/products/aros-arcilla/aros-arcilla-redondos-blanco.jpg'
            },
            {
                id: '010SL',
                color: 'salmon',
                image: 'images/products/aros-arcilla/aros-arcilla-redondos-salmon.jpg'
            },
            {
                id: '010AM',
                color: 'amarillo',
                image: 'images/products/aros-arcilla/aros-arcilla-redondos-amarillo.jpg'
            },
            {
                id: '010MD',
                color: 'mandarina',
                image: 'images/products/aros-arcilla/aros-arcilla-redondos-mandarina.jpg'
            },
            {
                id: '010NE',
                color: 'negro',
                image: 'images/products/aros-arcilla/aros-arcilla-redondos-negro.jpg'
            },
            {
                id: '010RO',
                color: 'rojo',
                image: 'images/products/aros-arcilla/aros-arcilla-redondos-rojo.jpg'
            }
        ]
    },
    {
        id: '011', 
        name:'Aros Tres Piezas', 
        price: 600, 
        category: 'aros-arcilla',
        link: 'products/aros-arcilla/aros-tres-piezas.html', 
        stock: 5, 
        image:'images/products/aros-arcilla/aros-arcilla-tres-piezas-blanco.jpg', 
        variacion: [
            {
                id: '011BL',
                color: 'blanco',
                image: 'images/products/aros-arcilla/aros-arcilla-tres-piezas-blanco.jpg'
            },
        ]
    },
    {
        id: '012', 
        name:'Aros Acqua', 
        price: 550, 
        category: 'aros',
        link: 'products/aros/aros-acqua.html', 
        stock: 5, 
        image:'images/products/aros/aros-acqua.jpg', 
        variacion: [
            {
                id: '012BL',
                color: 'celeste',
                image: 'images/products/aros/aros-acqua.jpg'
            }
        ]
    },
    {
        id: '013', 
        name:'Aros Ostras', 
        price: 550, 
        category: 'aros', 
        link: 'products/aros/aros-ostras.html', 
        stock: 5, 
        image:'images/products/aros/aros-ostras.jpg', 
        variacion: [
            {
                id: '013BL',
                color: 'plateado',
                image: 'images/products/aros/aros-ostras.jpg'
            }
        ]
    },
    {
        id: '014', 
        name:'Aros Largos Frida', 
        price: 550, 
        category: 'aros', 
        link: 'products/aros/aros-largos-frida.html', 
        stock: 5, 
        image:'images/products/aros/aros-largos-frida.jpg', 
        variacion: [
            {
                id: '014BL',
                color: 'verde',
                image: 'images/products/aros/aros-largos-frida.jpg'
            }
        ]
    },
    {
        name:'Aros Laureles', 
        id: '015', 
        price: 550, 
        category: 'aros', 
        link: 'products/aros/aros-laureles.html', 
        stock: 5, 
        image:'images/products/aros/aros-laureles-plateados.jpg', 
        variacion: [
            {
                id: '015BL',
                color: 'plateado',
                image: 'images/products/aros/aros-laureles-plateados.jpg'
            },
            {
                id: '015BL',
                color: 'negro',
                image: 'images/products/aros/aros-laureles-negros.jpg'
            }
        ]
    },
    {
        id: '016', 
        name:'Collar Audrey', 
        price: 2400, 
        category: 'collares',
        link: 'products/collares/collar-audrey.html', 
        stock: 2, 
        image:'images/products/collares/collar-audrey.jpg', 
        variacion: [
            {
                id: '016PL',
                color: 'plateado',
                image: 'images/products/collares/collar-audrey.jpg'
            },
        ]
    },
    {
        id: '017', 
        name:'Collar Estrellas', 
        price: 1500, 
        category: 'collares',
        link: 'products/collares/collar-estrellas.html', 
        stock: 2, 
        image:'images/products/collares/collar-estrellas.jpg', 
        variacion: [
            {
                id: '017PL',
                color: 'plateado',
                image: 'images/products/collares/collar-estrellas.jpg'
            },
        ]
    },
    {
        id: '018', 
        name:'Collar Love', 
        price: 1400, 
        category: 'collares',
        link: 'products/collares/collar-love.html', 
        stock: 2, 
        image:'images/products/collares/collar-love.jpg', 
        variacion: [
            {
                id: '018PL',
                color: 'plateado',
                image: 'images/products/collares/collar-love.jpg'
            },
        ]
    },
    {
        id: '019',
        name:'Collar Mariposas', 
        price: 1600, 
        category: 'collares',
        link: 'products/collares/collar-mariposas.html', 
        stock: 2, 
        image:'images/products/collares/collar-mariposas.jpg', 
        variacion: [
            {
                id: '019DO',
                color: 'dorado',
                image: 'images/products/collares/collar-mariposas.jpg'
            },
        ]
    },
    {
        id: '020', 
        name:'Collar Mariposa', 
        price: 1600, 
        category: 'collares',
        link: 'products/collares/collar-mariposa.html', 
        stock: 2, 
        image:'images/products/collares/collar-mariposa.jpg', 
        variacion: [
            {
                id: '020DO',
                color: 'dorado',
                image: 'images/products/collares/collar-mariposa.jpg'
            },
        ]
    },
    {
        id: '021', 
        name:'Collar Muffin', 
        price: 1600, 
        category: 'collares', 
        link: 'products/collares/collar-muffin.html', 
        stock: 2, 
        image:'images/products/collares/collar-muffin.jpg', 
        variacion: [
            {
                id: '0121PL',
                color: 'plateado',
                image: 'images/products/collares/collar-muffin.jpg'
            },
        ]
    },
    {
        id: '022', 
        name:'Collar Corona', 
        price: 1600, 
        category: 'collares', 
        link: 'products/collares/collar-corona.html', 
        stock: 2, 
        image:'images/products/collares/collar-corona.jpg', 
        variacion: [
            {
                id: '022PL',
                color: 'plateado',
                image: 'images/products/collares/collar-corona.jpg'
            },
        ]
    },
    {
        id: '023', 
        name:'Collar Candado', 
        price: 1600, 
        category: 'collares', 
        link: 'products/collares/collar-candado.html', 
        stock: 2, 
        image:'images/products/collares/collar-candado.jpg', 
        variacion: [
            {
                id: '023PL',
                color: 'plateado',
                image: 'images/products/collares/collar-candado.jpg'
            },
        ]
    },
    {
        id: '024', 
        name:'Collar Piedra', 
        price: 1600, 
        category: 'collares', 
        link: 'products/collares/collar-piedra.html', 
        stock: 2, 
        image:'images/products/collares/collar-piedra.jpg', 
        variacion: [
            {
                id: '024PL',
                color: 'plateado',
                image: 'images/products/collares/collar-piedra.jpg'
            },
        ]
    },
    {
        id: '025', 
        name:'Pulsera Secret', 
        price: 1600, 
        category: 'pulseras', 
        link: 'products/pulseras/pulsera-secret.html', 
        stock: 2, 
        image:'images/products/pulseras/pulsera-secret.jpg', 
        variacion: [
            {
                id: '025SL',
                color: 'salmon',
                image: 'images/products/pulseras/pulsera-secret.jpg'
            },
        ]
    },

]


