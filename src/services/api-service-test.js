export default class ApiServiceTest {
    data = [
        {
            id: 1,
            email: 'admin@gmail.com',
            name: 'admin'
        },
        {
            id: 2,
            email: 'user@gmail.com',
            name: 'user'
        }
    ];

    getUsers() {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(this.data)
            }, 700)
        });
    }

}