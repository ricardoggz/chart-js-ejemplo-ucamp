//Elemento del DOM donde se renderiza la gráfica
const ctx = document.getElementById('myChart');

//Enspoint
const base_url = 'https://reqres.in'
//Generar nuestro fetch de datos
fetch(`${base_url}/api/users`) //GET
.then((response)=> response.json())
.then((json)=> {
    const colors =[
    '#8e44ad',
    '#2980b9',
    '#1abc9c',
    '#2c3e50',
    '#c0392b',
    '#ff6b81'
    ]
    new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: json.data.map((user)=> user.first_name),
          datasets: [{
            label: 'Usuarios',
            data: json.data.map((user)=> user.id),
            borderWidth: 1,
            backgroundColor: colors.map(color=> color)
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
})
.catch((error)=> console.log('Algo ocurrió mal'))
  