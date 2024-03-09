### chương1
## bài 2
# bài 1
vxhsxhsgxhsg
swjx ehgcegxgeh
xjexe
# bài 2




--------------------------------------------------2/2/2024---------------------------------------------------------------

### Them vi du ve vong lap

## Vong lap lui 5 so
for (i = 100; i >= 0; i -= 5) {
    console.log(i)
}

## Vong lap tang 5 so
for(i=0; i<=100; i+=5){
    console.log(i)
}




### De quy
- Một hàm tự gọi lại chính nó đươc gọi là đê quy

1) Xác đinh điểm dừng
2) Login handle => Tạo điểm dừng


function deQuy() {
    deQuy();
}

deQuy() // Lỗi

//KO NÊN DÙNG ĐỆ QUY ĐỂ GIẢI BÀI TOÁN KHI KO NẮM CHẮC

# Tự tìm hiểu về function programming


## Ví dụ vòng lặp đệ quy ( Học xong call back quay lại đây)
function loop(start, end, cb) {
    if (start < end) {
        cb(start)
        return loop(start + 1, end, cb)
    }

}

var array = ['js', 'java', 'php']

loop(0, array.length, function(index) {
    console.log(array[index])
});




function giaiThuat(num) {
     if (num > 0) {
         return num * giaiThuat(num - 1) // Gọi lại thằng giaiThuat() đến khi nào ko đạt điều kiện nữa ms dừng
     }
     return 1;
 }
 console.log(giaiThuat(6))




## Bài toán Từ một mảng hãy in ra một mảng gồm các phần tử ko lặp lại 
1) 
arr = ['a', 'b', 'c', 'd', 'a', 'a', 'c']

// Constructor Set chỉ tồn tại 1 loai

console.log(new Set(arr)) //nhưng chỉ nhận lại thằng Set thôi

//Nếu đề yêu cầu nhận lai mảng thì
console.log([...(new Set(arr))]) // Kết quả trả ra là một mảng


 
-------------------------------------------5/2/2024--------------------------------------
### Lam viec voi mang

## Array methods:
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()

#   ==> Những cách viết này ngắn gọn dễ hiểu hơn vòng lặp 
    => tức là chúng ta vẫn có thể sử dùng vòng lặp để viết nếu thích


1) foreach: Duyệt từng phần tử mảng

var array = [{
        id: 1,
        name: 'JavaScript',
        coin: 400

    },
    {
        id: 2,
        name: 'Java',
        coin: 600

    },
    {
        id: 3,
        name: 'NodeJS',
        coin: 500

    },
    {
        id: 4,
        name: 'PHP',
        coin: 400

    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 700

    }
]

// Truyền một hàm qua tham số được gọi là callback (Chưa học tới)
array.forEach(function(arr, index) {
    console.log(index, arr)
})


2) every: Kiểm tra tất cả các phần tử thuộc một mảng phải thỏa mãn một điều kiện gì đó  (Trả về kiểu boolean)

var array = [{
        id: 1,
        name: 'JavaScript',
        coin: 0

    },
    {
        id: 2,
        name: 'Java',
        coin: 0

    },
    {
        id: 3,
        name: 'NodeJS',
        coin: 0

    },
    {
        id: 4,
        name: 'PHP',
        coin: 0

    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 0

    }
]

// Truyền một hàm qua tham số được gọi là callback (Chưa học tới)
var isFree = array.every(function(arr, index) {
    console.log(index)
    return arr.coin === 0
})

console.log(isFree)

# ==> Kiểm tra tất cả điều kiện mảng phải thỏa một điều kiện gì đó



3) Some: Chỉ cần một ông trong đó đúng thì ngừng kiểm tra tiếp và trả lại đúng


var array = [{
        id: 1,
        name: 'JavaScript',
        coin: 10

    },
    {
        id: 2,
        name: 'Java',
        coin: 20

    },
    {
        id: 3,
        name: 'NodeJS',
        coin: 30

    },
    {
        id: 4,
        name: 'PHP',
        coin: 0

    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 50

    }
]

// Truyền một hàm qua tham số được gọi là callback (Chưa học tới)
var isFree = array.some(function(arr, index) {
    return arr.coin === 0
})

console.log(isFree)


4) find: kiểm tra mãng nếu phần tử thỏa mãng thì sẽ ngưng lại và trả về kết quả (chỉ trả về một phần tử )

var array = [{
        id: 1,
        name: 'JavaScript',
        coin: 10

    },
    {
        id: 2,
        name: 'Java',
        coin: 20

    },
    {
        id: 3,
        name: 'NodeJS',
        coin: 30

    },
    {
        id: 4,
        name: 'PHP',
        coin: 0

    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 50

    }
]

// Truyền một hàm qua tham số được gọi là callback (Chưa học tới)
var arr = array.find(function(arr, index) {
    return arr.name === 'Java'
})

console.log(arr)

5) filter: Khác find ở chỗ là trả về tất cả kết quả đúng (danh sách)

var array = [{
        id: 1,
        name: 'JavaScript',
        coin: 10

    },
    {
        id: 2,
        name: 'Java',
        coin: 20

    },
    {
        id: 3,
        name: 'NodeJS',
        coin: 30

    },
    {
        id: 4,
        name: 'PHP',
        coin: 0

    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 50

    },
    {
        id: 6,
        name: 'ReactJS',
        coin: 50

    }
]

// Truyền một hàm qua tham số được gọi là callback (Chưa học tới)
var arr = array.filter(function(arr, index) {
    return arr.name === 'ReactJS'
})

console.log(arr)



6) map: có thể thêm các phần tử vào  

var array = [{
        id: 1,
        name: 'JavaScript',
        coin: 10

    },
    {
        id: 2,
        name: 'Java',
        coin: 20

    },
    {
        id: 3,
        name: 'NodeJS',
        coin: 30

    },
    {
        id: 4,
        name: 'PHP',
        coin: 0

    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 50

    },
    {
        id: 6,
        name: 'ReactJS',
        coin: 50

    }
]

var newArr = array.map(function(array) {
        // console.log(array)
        return {
            id: array.id,
            name: `Khoa hoc: ${array.name}`,
            coin: array.coin,
            originArray: newArr,

        }

    }

)
console.log(newArr)


7) reduce: muốn nhận về một kết quả duy nhất khi tính toán trên các phần tử Array
# ==> nếu ko dùng reduce() thì có thể dùng vòng lặp

var array = [{
            id: 1,
            name: 'JavaScript',
            coin: 10

        },
        {
            id: 2,
            name: 'Java',
            coin: 20

        },
        {
            id: 3,
            name: 'NodeJS',
            coin: 30

        },
        {
            id: 4,
            name: 'PHP',
            coin: 0

        },
        {
            id: 5,
            name: 'ReactJS',
            coin: 50

        },
        {
            id: 6,
            name: 'ReactJS',
            coin: 50

        }
    ]
    // function coinH(accumlator){

//}

// var totalCoin = array.reduce(coinH,0)

var i = 0
var totalCoin = array.reduce(function(accumlator, curentValue, currentIndex, originArr) {
        //accumulator: luư trử
        //currentValue: Giá trị hiện tại
        //currentIndex: Chỉ mục của giá trị hiện tại
        //originArray: Array góc(Là array gọi thằng reduce)

        i++;

        var total = accumlator + curentValue.coin


        console.table({
            'luoc chay:': i,
            'Bien tich tru: ': accumlator,
            'gia khoa hoc:': curentValue.coin,
            'Tich tru duoc': total
        })

        return total
    }, 0) //initial value: gia tri dau tien truyen cho no cai j thif lan thu nhat no se chay cai do
console.log(totalCoin)


## Bài tập 
var sports = [{
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
var i = 0

function getTotalGold(array) {
    sum = array.reduce(function(accumlator, currentValue) {
        i++
        return sum = accumlator + currentValue.gold

    }, 0)
    return sum
}


-----------------------------------------------6/2/2024------------------------------------------------------

### Reduce() Phan 2


# => không phải bài toán nào cũng bỏ đi initial value

# => Trường hợp cộng các số trong cùng object thì phải tạo biến khởi taọ (initial value)


var numbers = [100, 200, 300, 400]
var totalCoin = numbers.reduce(function(total, numbers) {
    return total + numbers
}, 0)

console.log(totalCoin)
 

# => nếu vẫn cho ra kết quả đúng thì vẫn có thể ko cần biến khởi tạo

Ví dụ: 
var numbers = [100, 200, 300, 400]
var totalCoin = numbers.reduce(function(total, numbers) {
    return total + numbers
})

console.log(totalCoin) 
# => vẫn cho ra kết quả cuối là 1000


## Bai 1:

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var flatArray = depthArray.reduce(function(flatOutput, flatItem) {
        return flatOutput.concat(flatItem)
    }, []) // muốn nhận laị mảng thì truyền vào đây []

console.log(flatArray) // [1,2,3,4,5,6,7,8,9]



## Bai 2:
var topic = [{
        topic: 'front end',
        course: [{
                id: 1,
                title: 'HTML,CSS'
            },
            {
                id: 2,
                title: 'Javscript'
            }
        ]
    },
    {
        topic: "back end",
        course: [{
                id: 1,
                title: 'Java'
            },
            {
                id: 2,
                title: 'PHP'
            }
        ]
    }
]

var topicFull = topic.reduce(function(course, topics) {
    return course.concat(topics.course)
}, [])

console.log(topicFull)



## Bai 3:
var html = topicFull.map(function(course) {
    return `
    <div>
        <h2>${course.title}</h2>
        <p>${course.id}</p>
    </div>`
})

console.log(html)




## Bai tap 
var watchList = [{
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
    }
];


function calculateRating(watchList) {
    let directorName = watchList.filter(function(Christopher) {
        return Christopher.Director == "Christopher Nolan"
    })

    let rate = directorName.reduce(function(sum, director) {
        return sum + Number.parseFloat(director.imdbRating)

    }, 0)
    return rate / directorName.length
}



// Expected results
console.log(calculateRating(watchList)); // Output: 8.675


--------------------------------------9/2/2024----------------------------


### Phuong thuc reduce() co logic nhu the nao

## Th ko truyen bien tich tru 
Array.prototype.reduce2 = function(callback, initialValue) {
    if (arguments.length < 2) {
        i = 1
        resuit = this[0]
    }
    for (let i = 0; i < this.length; i++) {
        resuit = callback(resuit, this[i], i, this)
    }

    return resuit
}

const numbers = [1, 2, 3, 4, 5]

const resuit = numbers.reduce2(function(total, number) {
    return total + number
})
console.log(resuit)



## TH truy bien tich tru
Array.prototype.reduce2 = function(callback, initialValue) {
    for (let i = 0; i < this.length; i++) {
        resuit = callback(resuit, this[i], i, this)
    }

    return resuit
}

const numbers = [1, 2, 3, 4, 5]

const resuit = numbers.reduce2(function(total, number) {
    return total + number
},0)
console.log(resuit)



## Bai Tap
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

function arrToObj(arr) {
    return arr.reduce(function(call, init) {
        call[init[0]] = init[1]
        return call
    }, {})
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }



### Include method
- Có sẳn trong array và string

# Kiểm tra tính đúng sai( true/false)
1) var title = 'Reponsive web design'
console.log(title.includes('Web design'))
console.log(title.includes('design', 7))



2) var course = ['JS', 'java,', 'php']

console.log(course.includes('JS'))


//3 + -1 
console.log(course.includes('php', -1)) // Thuong cach nay it su dung

# Lưu ý các số như -1 là index(được tính từ 0 ,1 ,2 .....)






### Callback ????

- Là Hàm (Function) được truyền vào đối số
- khi gọi hàm khác

1) Là hàm
2) Được truyền qua đối số


# ==> Gọi một hàm trong một hàm đc gọi là callback

function myFunction(param) {
    param('Hoc lap trinh')
}

function myCallback(value) {
    console.log('value:', value)
}

myCallback(123)
myFunction(myCallback)

## Ví dụ 
function sumCb(a, b) {
    return a + b

}

function caculate(a, b, cb) {
    a = 1
    b = 2
    return cb(a, b);
}

sumCb(caculate)
    // Expected results
    // caculate(1, 2, sumCb) // Output: 3
    // caculate(1, 2, subCb) // Output: -1
    // caculate(1, 2, multiCb) // Output: 2
    // caculate(3, 1, divCb) // Output: 3


### Callback phần 2

1) Là hàm
2) Truyền qua đối số
3) Được goi lại ( trong hàm nhận đối số)




# Ví dụ về map
Array.prototype.map2 = function(callback) {
    var output = [],
        arrayLength = this.length

    for (var i = 0; i < arrayLength; ++i) {
        var resuit = callback(this[i], i);
        output.push(resuit)
    }
    return output
}


var course = [
    'JS',
    'PHP',
    'Ruby'
]




var htmls = course.map2(function(course) {
    return `<h2>${course}</h2>`
})
console.log(htmls.join(''))

---------------------------------------------------11/2/2024----------------------------------


## forEach

Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}





var course = new Array(100)

course.push('Js', 'ruby')




var output = course.forEach2(function(course, index, array) {
    console.log(course, index, array)
})





--------------------------------------------------------15/2/2024----------------------------------


### My filter()

# find : trả về giá đầu tiên tìm được

# filter: trả về tất cả giá trị thỏa mãn điều kiện và đưa vào mảng mới


## Ví dụ
Array.prototype.filter2 = function(callback) {

    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output
}


var courses = [

    {
        name: 'JS',
        coin: 600
    },
    {
        name: 'PHP',
        coin: 700
    },
    {
        name: 'Java',
        coin: 300
    }
]
var filtercourses = courses.filter2(function(courses, index, array) {
    // console.log(courses, index, array)
    return courses.coin > 500

})
console.log(filtercourses)



### My some()

# some(): true/false


//Cach 1:
// Array.prototype.some2 = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callback(this[index], index, this)) {
//                 return true
//             }
//         }
//     }
//     return false
// }


Array.prototype.some2 = function(callback) {

    var output = false
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                output = true
                break
            }
        }
    }
    return output
}



var courses = [

    {
        name: 'JS',
        coin: 600,
        isFinish: false
    },
    {
        name: 'PHP',
        coin: 700,
        isFinish: false
    },
    {
        name: 'Java',
        coin: 300,
        isFinish: false
    }
]


var resuit = courses.some2(function(courses, index, array) {
    return courses.isFinish
})
console.log(resuit)


### My every()

# kiểm tra tất cả element trong mảng thỏa mảng tất cả điều kiện mà mình đưa ra thì ms trả về true/false

Array.prototype.every2 = function(callback) {
    var output = true


    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var resuit = callback(this[index], index, this)
            if (!resuit) {
                output = false
                break
            }

        }
    }
    return output
}
var courses = [

    {
        name: 'JS',
        coin: 600,
        isFinish: false
    },
    {
        name: 'PHP',
        coin: 700,
        isFinish: false
    },
    {
        name: 'Java',
        coin: 300,
        isFinish: false
    }
]


var resuit = courses.every2(function(courses, index, array) {
    return courses.coin > 500
})
console.log(resuit)



--------------------------------------16/2/2024------------------------------------

### HTML DOM (Document Object Model)


# Có 3 thành phần: 

1) Element : Các thẻ tag
2) Attribute: Thuộc tính trong thẻ ví dụ class='',href='',....
3) Text : Phần tử của DOM

# Mỗi ô vuông được gọi là Node




### HTML DOM vs DOM API

# API: Application Programming Interface


# Javascript ko có DOM mà khi chạy trên Browser Web API sẽ cung cấp DOM cho JS



### Document object

document.write('Hello Gay')
# ===> Giống như thêm text vào file HTML





### Get element methods

1) Element: ID, class, tag, CSS selector. HTML collection

# Id: Trả về đối tượng đó
document.getElemntById('')

# class: trả về mảng
document.getElemntByClassName('')

# tag : 
document.getElemntByTagName('')


# CSS selector:
var headingnodes = document.querySelector('.box .heading2:first-child')

console.log(headingnodes)


#  selector tất cả đối tuowgnj truyền vào
var headingnodes = document.querySelectorAll('.box .heading2:first-child')

console.log(headingnodes[0])


# HTML collection: Tự tìm hiểu thêm


# ==> Cài nào quen dùng thi dùng đễ giải quyết bài toán




------------------------------------------------------19/2/2024---------------------------

### Get element ethods - 2



# ==> File HTMl phần <script src ="./main.js"><script> phải nằm dưới body (</body>)





var boxNode = document.querySelector('.box1')

//CV1: Su dung toi 'boxNode'
//....
console.log(boxNode)


//CV2: Su dung toi cacs li elemment
// La con cua '.box-1'

console.log(boxNode.getElementsByTagName("li"))
console.log(boxNode.getElementsByTagName("p"))





### Get element methods - 3
Đọc kỹ đề bài khi nào thì lấy element,khi nào thì lấy HTML collection





Ôn lại các phương thức

1) getElementById



2) getElementsByClassName
# => thằng này cũng giống TagName



3) getElementsByTagName 
# ==> Nhớ truyền index vào để lấy được phần tử còn ko thì nó sẽ return ra HTML colleciton

# VD:
var headings = document.getElementsByTagName('h1')

console.log(headings[0])

==> Vì HTML có rất nhiều thẻ h1 nền cần xác định index để lấy giá trị cụ thể

4) querySelector
5) querySelectorAll
6) HTML collection
7) document.write()

--------------------------------------------20/2/2024------------------------------------------


### Attribute node & Text node

# Attribute node là các thuộc tính của các tag

# Text node là các ký tự được ghi trong các tag




### DOM attribute
var headingElement = document.querySelector('h1')

headingElement.title = 'Heading'

# ==> Thêm attribute vào các thẻ hợp lệ nhưng chỉ được thực thi khi chạy trên JS






var headingElement = document.querySelector('h1')

headingElement.setAttribute('class', 'heading')
# ==> Đối số thứ nhất là tên attribute, đối số thứ hai là giá trị attribute muốn set



var headingElement = document.querySelector('h1')

console.log(headingElement.getAttribute('class'))
# ==> Lấy giá trị của attribute ra



headingElement.title 
# ==> attribute phải hợp lệ với element đó ms sử dụng được





------------------------------------------26/2/2024--------------------------------------


### InnerText vs textContent


var headingElement = document.querySelector('.heading')


console.log(headingElement.innerText)
# => Lấy ra giá trị được gọi là getter




# Có thể thay đổi text
var headingElement = document.querySelector('.heading')


headingElement.innerText = 'Hello Dung'


# => Thay đổi nội dung đc gọi là setter



## innerText : trả lại cái gì nhìn thấy được
var headingElement = document.querySelector('.heading')


console.log(headingElement.innerText)
console.log(headingElement.textContent)


## textConntent: Trả lại những gì thât sự lầ text node ở bên trong


# ==> 2 thằng này ko dùng để thêm element node 




### InnerHTML vs OuterHTML Property

## InnerHTML: Thêm thẻ mới vào trong thẻ đó
var boxElement = document.querySelector('.box')


boxElement.innerHTML = '<h1>Heading</h1>'

console.log(document.querySelector('h1').innerHTML)

# ==> Có thể thêm cả thẻ và thuộc tính




## OuterHTML: Ghi đè lên chính thẻ đó

var boxElement = document.querySelector('.box')


boxElement.outerHTML = '<span>Helloo</span>'

console.log(boxElement) // ÍT khi sử dụng outerHTML


-------------------------------28/2/2024---------------------------------


### Node prototype

# Mỗi thuộc tính có chung và riêng cho từng node
ví dụ textContent là thuộc tính chung cho Element, Attribute,text node 



### DOM CSS


var boxElement = document.querySelector('.box')
// Có thể thêm css
boxElement.style.width = '100px'
boxElement.style.height = '100px'
boxElement.style.backgroundColor = 'red'


// Sử dụng để gom nhiều dòng cho gọn
Object.assign(boxElement.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
})



--------------------------------------5/3/2024----------------------------------


## ClassList Property

# add: thêm class vao element

# contains: Kt 1 class có nằm trong element

# remove: Xóa bỏ class khỏi element

# toggle: Phương thức toggle dùng để thêm class được chỉ định vào element nếu class đó chưa xuất hiện và xóa bỏ class đó nếu đã xuất hiện

===> Là những thuộc tính thường dùng

# add: Thêm class
boxElement.classList.add('red', 'blue')


# contains: Kiểm tra class
console.log(boxElement.classList.contains('red'))// kiểm tra class red có tồn tại ko.


# toggle: Phương thức toggle dùng để thêm class được chỉ định vào element nếu class đó chưa xuất hiện và xóa bỏ class đó nếu đã xuất hiện
boxElement.classList.toggle('red')// Kiểm tra nếu có class red thì xóa còn ko có thì thêm vào


# ==> Ứng dụng toggle có thể làm các nút đóng mở




### DOM Event

1) Atribute events

    <h1 onclick="console.log(this)"><span>HTML</span></h1> // Vẫn trả ra kết quả HTML (Này đc gọi là sự kiên nôi bọt: như thả bong bóng vô nc nó cứ nổi lên)

    
2) Assin event using the element node


var h1Element = document.querySelector('h1')

h1Element.onclick = function(e) {
    console.log(e.target)
}

# ==> e chính là sự kiên click còn .target sẽ trả về chính element mà đang lắng nghe event này




var h1Element = document.querySelectorAll('h1')


for (var i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = function(e) {
        console.log(e.target) 
    }
}

# ==> không sử dụng biến bên ngoài mà phải sử dụng e.target





### DOM event example

1) Input / select
<!DOCTYPE html>
<html lang="en">

<!DOCTYPE html>
<html>


<head>
    <title>HTML DOM</title>
</head>

<body>
    <input type="text">
    <input type="checkbox">

    <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
</body>
<script src="./main.js "></script>



</html>


var inputValue


var inputElement = document.querySelector('select');

inputElement.onchange = function(e) {
    console.log(e.target.value)
}



2) Key up / down
// down: ấn cái ra luôn
var inputElement = document.querySelector('input[type="text"]');

inputElement.onkeydown = function(e) {
    console.log(e.target.value)
}




//up: buôn nút trên bàn phím mới hiện

var inputElement = document.querySelector('input[type="text"]');

inputElement.onkeyup = function(e) {
    console.log(e.which)

    switch (e.which) {
        case 27:
            console.log('Exit')
            break;
    }

}

//onkeypress: ấn giữ nút nào nút đó chạy liên tục
# => .which chính là vị trí nút trên bàn phím mà mình vừa bấm






### PreventDefault and StopPropagation

1) preventDefault: loại bỏ hành vi mặt định của trình duyệt trên thẻ html

# Ví dụ 1:


 var aElement = document.links


 for (var i = 0; i < aElement.length; ++i) {
     aElement[i].onclick = function(e) {


         if (!e.target.href.startsWith('https://fullstack.edu.vn/')) {
             e.preventDefault()
         }

     }
 }

# Ví dụ 2:
<!DOCTYPE html>
<html lang="en">

<!DOCTYPE html>
<html>


<head>
    <title>HTML DOM</title>
</head>
<style>
    ul {
        display: none
    }
    
    input:focus~ul {
        display: block;
    }
</style>

<body>
    <input placeholder="Tim kieems" />

    <ul>
        <li>JS</li>
        <li>PHP</li>
        <li>Java</li>
    </ul>
</body>
<script src="./main.js "></script>



</html>

var ulElement = document.querySelector('ul')

ulElement.onmousedown = function(e) {
    e.preventDefault()

}

ulElement.onclick = function(e) {
    console.log(e.target)
}




2) stopPropagation: Loại bỏ sự kiện nổi bọt

<!DOCTYPE html>
<html lang="en">

<!DOCTYPE html>
<html>


<head>
    <title>HTML DOM</title>
</head>
<style>
    ul {
        display: none
    }
    
    input:focus~ul {
        display: block;
    }
</style>

<body>
    <div onclick="console.log('DIV')">

        DIV
        <button onclick="console.log('CLik me')">clickme</button>
    </div>
</body>
<script src="./main.js "></script>



</html>


document.querySelector('div').onclick = function() {
    console.log('DIV')
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation()
    console.log('Click me')
}



### Event listener

1) xử lý nhiều việc khi 1 event xảy ra

var btn = document.getElementById('btn')

btn.onclick = function() {
    console.log('Viec 1')

    console.log('Viec 2')

    alert('Viec 3')
}

setTimeout(function() {
    btn.onclick = function() {}
}

# ==> có thể hủy bỏ sự kiện DOM event đó là gán lại bằng 1 function rỗng


2) Lắng nghe / Hủy bỏ lắng nghe

# .addEventListener(Tên Event,function callback sẽ thực hiện khi event này xãy ra)

var btn = document.getElementById('btn')

btn.addEventListener('click', function(e) {
    console.log('Event 1')
})
btn.addEventListener('click', function(e) {
    console.log('Event 2')
})
btn.addEventListener('click', function(e) {
    console.log('Event 3')
})

#  mỗi addEventListener gọi một cái callback sẽ đc gọi là thứ tự ông nào trc thì gọi trc
 ==> Tường minh dễ hiểu hơn



var btn = document.getElementById('btn')

function viec1() {
    console.log('Viec 1')
}

btn.addEventListener('click', viec1)


# Cũng có thể hủy bỏ một sự kiện nào đó

var btn = document.getElementById('btn')

function viec1() {
    console.log('Viec 1')
}

btn.addEventListener('click', viec1)


setTimeout(function() {
    btn.removeEventListener('click', viec1)
}, 300)


##  ==>Chúng ta nên sử dụng DOM event trong trường hợp muốn lắng nghe một sự kiện nào đó mà ko có nhu cầu gở bỏ đi


##  ==> Sử lý nhiều việc vẫn có thể sử dụng DOM event  những dài quá có thể đổi sang addEventListener


##  ==>Chúng ta nên sử dụng addeventlistener trong trường hợp muốn lắng nghe một sự kiện nào đó mà có nhu cầu gở bỏ đi


---------------------------------------8/3/2024------------------------------------


### JSON

1) Là một định dạng dữ liệu (chuỗi)
2) Được viết tắt JavaScrippt Object Notation
3) JSON: Number, Boolean, Null, Array

object

# Stringify: Từ Javascript types -> JSON
console.log(JSON.stringify({
    name: 'Dung Le',
    age: '18'
}))
# Parse: Từ JSON -> Javascript types
var json = '{"name":"Dung Le", "age":"18"}'


var obj = JSON.parse(json)


var json = '["JS","PHP"]'

var json = '{"name":"Dung Le", "age":"18"]'





### Promise

1) Sync: Đồng bộ

console.log(1)
console.log(2)
==> thằng nào viết trc chạy trc


2) Async: Bất đồng bộ
## Các thao tác bất đồng bộ:
 # setTimeout,setInterval,fetch
 # XMLHttpRequest,file reading,
 # request animation frame


## JS cung cấp callback để sử lý các thao tác bát đồng bộ




### Promise(pain)
Callback hell

setTimeout(function() {
            console.log(1)
            setTimeout(function() {
                    console.log(2)
                    setTimeout(function() {
                            console.log(3)
                            setTimeout(function() {
                                    console.log(4)
                                })
                            })
                    })
            })




### Promise(concept)
# 2 bước để tạo ra promise:
1) khởi tạo ( new Promise)
2) tạo ra Executor(trong đây phải gọi 1 trong 2 thằng resolve hoặc reject)

var promise = new Promise(
    // Executor
    function(resolve, reject) {
        //resolve: thanh cong
        //reject: that bai
    })
# ==> khi ko gọi resolve hay reject thì thằng Promise đang trong trạng thái chờ(Penđing) ==> Làm rò rĩ bộ nhớ

# thằng promise sẽ trả ra  
1) .then(function(){})  ==>  Khi resolve này được gọi


2) .catch(function(){})  ==> Khi reject này được gọi


3) .finally(function(){})  ==> Khi 1 trong resolve hoặc reject này được gọi




#### ==> Traloi phỏng vấn : Promise thường sử dụng để sử lý thao tác bất đồng bộ, trc khi có Promise a sử dụng callback thì sẽ xảy ra callback hell gây rỗi rám khó hiểu. Thằng Promise đc sinh ra trong phiên bản ES6 của js để khác phục tình trạng callback hell. Và để sự dụng promise thì ta sẽ sử dụng từ khóa new để tao ra promise và trong constructor của nó thì truyền vào một Executor function sẽ nhận đc 2 tham số dưới dạng hàm khi mà nó thực thi 1 là resolve sẽ sử lý khi thao tác thành công và 2 là reject khi thao tác thất bại khi thằng promise tạo ra sẽ sự dụng phương thức .then khi promise resolve hoặc .catch khi reject 









