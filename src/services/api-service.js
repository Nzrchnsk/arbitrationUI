export default class ApiService {
    // _apiBase = 'https://localhost:5001/Api';
    _apiBase = 'https://localhost:7189/Api';


    getResource = async (url) => {
        //console.log(`${this._apiBase}${url}`);
        const res = await fetch(`${this._apiBase}${url}`);
        //console.log(res.json());
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };
    
    postResource = async (url, data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        
        //console.log(`${this._apiBase}${url}`);
        const res = await fetch(`${this._apiBase}${url}`, requestOptions);
        
        //console.log(res.json());
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getUsers = async () => {
        const res = await this.getResource(`/users`);
        return res
            .map(this._transformUser)
    };

    getAllP2PCurrentCourses = async () => {
        const res = await this.getResource(`/Course/P2P/Range/`);
        return res
            .map(this._transformCurrentP2pCourses)
    };
    
    getAllP2PCurrentCoursesWithBalance = async (balance) => {
        const res = await this.getResource(`/Course/P2P/Range/${balance}`);
        return res
            .map(this._transformCurrentP2pCourses)
    };
    
    getAllMarketCurrentCourses = async () => {
        const res = await this.getResource(`/Course/Market/Range/`);
        return res
            .map(this._transformCurrentMarketCourses)
    };


    _transformCurrentP2pCourses = (currentP2PCourse) => {
        return {
            wholesalePrice: currentP2PCourse.wholesalePrice,
            retailPrice: currentP2PCourse.retailPrice,
            coin: currentP2PCourse.coin,
            fiat: currentP2PCourse.fiat,
            payType: currentP2PCourse.payType,
            exchange: currentP2PCourse.exchange
        }
    }
    
    _transformCurrentMarketCourses = (currentMarketCourse) => {
        return {
            symbol: currentMarketCourse.symbol,
            firstCoin: currentMarketCourse.firstCoin,
            secondCoin: currentMarketCourse.secondCoin,
            price: currentMarketCourse.price,
            exchange: currentMarketCourse.exchange
        }
    }




    _transformUser = (user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email
        }
    }

    // data = [
    //     {
    //         id: 1,
    //         email: 'admin@gmail.com',
    //         name: 'admin'
    //     },
    //     {
    //         id: 2,
    //         email: 'user@gmail.com',
    //         name: 'user'
    //     }
    // ];
    //
    // getUsers() {
    //     return new Promise((resolve) => {
    //         setTimeout(()=>{
    //             resolve(this.data)
    //         }, 700)
    //     });
    // }
}