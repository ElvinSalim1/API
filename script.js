const messages = document.getElementById('messages');
const downloads = document.getElementById('downloads');
const notifications = document.getElementById('notifications');
const totalGrowth = document.getElementById('totalGrowth');
const totalOrders = document.getElementById('totalOrders');
const totalSales = document.getElementById('totalSales');
const totalPurchases = document.getElementById('totalPurchases');
const totalUsers = document.getElementById('totalUsers');
const totalProjects = document.getElementById('totalProjects');
const totalS = document.getElementById('totalS');
const getFullName = document.getElementById('getFullName');
const distributon = document.getElementById('distribution');
const openInvoices = document.getElementById('openInvoices');
const salesReport = document.getElementById('salesReport');
const ticket = document.getElementById('ticket');
const updates = document.getElementById('updates');
const output = document.getElementById('output');



var result = document.getElementsByTagName("h2")[0];

function getFullNam(firstname, lastname) {
    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}`)
    .then(res => res.text())
    .then(data => result.innerHTML+=data);
}

getFullNam("Elvin","Salimov");


fetch('http://inlupp-fa.azurewebsites.net/api/messages')
.then(res => res.json())
.then(data => {

    for(message of data) {

        messages.insertAdjacentHTML('beforeend', `
            <ul>
                <li>From: ${message.from}</li>
                <li>Title: ${message.title}</li>
            </ul>
        `); 
    }
});



fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
.then(res => res.json())
.then(data => {

    test = document.getElementById("downloads");

    test.innerHTML+=data[0].offlineAmount + " " + data[0].circleValue + "<br>";
    test.innerHTML+=data[1].onlineAmount + " " + data[1].circleValue;
});


fetch('https://inlupp-fa.azurewebsites.net/api/notifications')
.then(res => res.json())
.then(data => {

    for(notification of data) {

        notifications.insertAdjacentHTML('beforeend', `
            <ul>
                <li>Title: ${notification.title}</li>
                <li>Subtitle: ${notification.subtitle}</li>
            </ul>
        `); 

    }

});


fetch('https://inlupp-fa.azurewebsites.net/api/total-growth')
    .then(res => res.json())
    .then(chartp => {
        let output = '<h3>Total Growth</h3>';
        output += '<ul>';
        output += `
            <li>
                Currency: ${chartp.currency}
                Amount: ${chartp.amount}
              
            </li>
        `;
        output += '</ul>';
        
        document.getElementById('totalGrowth').innerHTML = output;
    })

    
fetch('https://inlupp-fa.azurewebsites.net/api/total-orders')
.then(res => res.json())
.then(chartp => {
    let output = '<h3>Total Orders</h3>';
    output += '<ul>';
    output += `
        <li>
            Currency: ${chartp.currency}
            Amount: ${chartp.amount}
          
        </li>
    `;
    output += '</ul>';
    
    document.getElementById('totalOrders').innerHTML = output;
})



fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
.then(res => res.json())
.then(chartp => {
    let output = '<h3>Total Sales</h3>';
    output += '<ul>';
    output += `
        <li>
            Currency: ${chartp.currency}
            Amount: ${chartp.amount}
            
        </li>
    `;
    output += '</ul>';
    
    document.getElementById('totalSales').innerHTML = output;
});


fetch('https://inlupp-fa.azurewebsites.net/api/total-purchases')
.then(res => res.json())
.then(chartp => {
    let output = '<h3>Total Purchases</h3>';
    output += '<ul>';
    output += `
        <li>
            Currency: ${chartp.currency}
            Amount: ${chartp.amount}
            
        </li>
    `;
    output += '</ul>';
    
    document.getElementById('totalPurchases').innerHTML = output;
});



    fetch('http://inlupp-fa.azurewebsites.net/api/total-users')
    .then(res => res.json())
    .then(data => {
        let output = '<h3>Total Users</h3>';
        output += '<ul>';
        output += `
            <li>
                Users: ${data.users}
                Growth: ${data.growth}
                Dataset: Labels: ${data.dataset.labels.map(f=>f)}
                Data: ${data.dataset.data.map(f=>f)}
            </li>
        `;
        output += '</ul>';
        
        document.getElementById('totalUsers').innerHTML = output;
    })


    fetch('http://inlupp-fa.azurewebsites.net/api/total-projects')
    .then(res => res.json())
    .then(project => {
        let output = '<h3>Total Projects</h3>';
        output += '<ul>';
        output += `
            <li>
                Projects: ${project.projects}
                Growth: ${project.growth}
                Dataset: Labels: ${project.dataset.labels.map(f=>f)}
                Data: ${project.dataset.data.map(f=>f)}
            </li>
        `;
        output += '</ul>';
        
        document.getElementById('totalProjects').innerHTML = output;
    })


    fetch('https://inlupp-fa.azurewebsites.net/api/total-sales-chart')
    .then(res => res.json())
    .then(chartp => {
        let output = '<h3>Total Sales Chart</h3>';
        output += '<ul>';
        output += `
            <li>
                Revenue: ${chartp.revenue}
                Returns: ${chartp.returns}
                Queries: ${chartp.queries}
                Invoices: ${chartp.invoices}
                Labels: ${chartp.labels.map(f=>f)}
                Dataset.Data: ${chartp.datasets[0].data.map(f=>f)}
                Dataset.Data: ${chartp.datasets[1].data.map(f=>f)}
            </li>
        `;
        output += '</ul>';
        
        document.getElementById('totalS').innerHTML = output;
    })



    fetch('https://inlupp-fa.azurewebsites.net/api/distribution')
    .then(res => res.json())
    .then(chartp => {
        let output = '<h3>Distribution</h3>';
        output += '<ul>';
        output += `
            <li>
                Labels: ${chartp.labels}
                Data: ${chartp.data}
                Cities: ${chartp.cities}
                Procentage: ${chartp.procentage}
                
            </li>
        `;
        output += '</ul>';
        
        document.getElementById('distribution').innerHTML = output;
    })

    

    fetch('https://inlupp-fa.azurewebsites.net/api/open-invoices')
    .then(res => res.json())
    .then(data => {
    
        for(invoices of data) {
    
            openInvoices.insertAdjacentHTML('beforeend', `
                <ul>
                    <li>Invoice: ${invoices.invoice}</li>
                    <li>Customer: ${invoices.customer}</li>
                    <li>Shipping: ${invoices.shipping}</li>
                    <li>Currency: ${invoices.currency}</li>
                    <li>Bestprice: ${invoices.bestPrice}</li>
                    <li>Purchasedprice: ${invoices.purchasedPrice}</li>
                    <li>Status: ${invoices.status}</li>
                </ul>
            `); 
        }
    });


    fetch('https://inlupp-fa.azurewebsites.net/api/sales-report')
    .then(res => res.json())
    .then(chartp => {
        let output = '<h3>Sales Report</h3>';
        output += '<ul>';
        output += `
            <li>
                Downloads: ${chartp.downloads}
                Purchases: ${chartp.purchases}
                Users: ${chartp.users}
                Growth: ${chartp.growth}
                Labels: ${chartp.labels.map(f=>f)}
                Datasets.Label: ${chartp.datasets[0].label}
                Datasets.Data: ${chartp.datasets[0].data.map(f=>f)}
                Datasets.Backgroundcolor: ${chartp.datasets[0].backgroundColor.map(f=>f)}
                
            </li>
        `;
        output += '</ul>';
        
        document.getElementById('salesReport').innerHTML = output;
    })


    fetch('http://inlupp-fa.azurewebsites.net/api/updates')
.then(res => res.json())
.then(data => {

    for(update of data) {

        updates.insertAdjacentHTML('beforeend', `
            <ul>
                <li>From: ${update.time}</li>
                <li>Title: ${update.title}</li>
                <li>Title: ${update.message}</li>
            </ul>
        `); 
    }
});











    
var result="";
fetch('https://inlupp-fa.azurewebsites.net/api/tickets')
    .then(res => res.json())
    .then(data => {
    
        for(message of data) {
        
    
            ticket.insertAdjacentHTML('beforeend', `
                <ul>
                    <li>Year: ${message.year}</li>
                    <p>Tickets:</p> ${message.tickets.map(f=>{
                    result="";
                    result += '<li>' + f.name + '</li>' + '<li>' + f.city + '</li>' + '<li>' + f.project + '</li>' + '<li>' + f.date + '</li>' + '<li>' + f.other + '</li>';
                    return result;
                    })}
                </ul>
            `); 
        }
    });
    

    
    






















