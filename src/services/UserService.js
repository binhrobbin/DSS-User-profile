import $ from 'jquery';
export default class UserService {
    static async getAll(pageSize, page) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `https://randomuser.me/api/?page=${page}&results=${pageSize}`,
                dataType: 'json',
                success: (response) => {
                    resolve(response)
                    console.log(response)
                },
                error: (err) =>{
                    reject(err)
                }
            });
        })
    }
    static async followGender(pageSize, page, gender) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `https://randomuser.me/api/?page=${page}&results=${pageSize}&gender=${gender}`,
                dataType: 'json',
                success: (response) => {
                    resolve(response)
                    console.log(response)
                },
                error: (err) =>{
                    reject(err)
                }
            });
        })
    }
}