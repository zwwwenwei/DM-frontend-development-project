import { faker } from '@faker-js/faker';
import star from './star.jpg'

function generateRandomDecimal(min, max) {
    return Math.random() * (max - min) + min;
}
const originalnumber = generateRandomDecimal(4, 5);
const number = originalnumber.toFixed(1);

const imageStyle = {
    width: 30,  
    height: 30,
    objectFit: 'cover',
}

const staffList = [
    {   "key": 0,
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "position": "React Developer",
        "rating": number,
        "star": <img src={star} className="star" alt="" style={imageStyle} />
    },
    {   "key": 1,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName(),
        "position": "Java Developer",
        "rating": number,
        "star": <img src={star} className="star" alt="" style={imageStyle} />
    },
    {   "key": 2,
        "avatar" : faker.image.avatar(),
        "name": faker.name.firstName(),
        "position": "Android Developer",
        "rating": number,
        "star": <img src={star} className="star" alt="" style={imageStyle} />
    },
    {
        "key": 3,
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "position": "Python Developer",
        "rating": number,
        "star": <img src={star} className="star" alt="" style={imageStyle} />
    },
    {
        "key": 4,
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "position": "Ruby Developer",
        "rating": number,
        "star": <img src={star} className="star" alt="" style={imageStyle} />
    }
]

export default staffList