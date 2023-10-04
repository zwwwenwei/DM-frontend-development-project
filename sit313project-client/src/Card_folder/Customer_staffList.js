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

const Customer_staffList = [
    {
        "key": 0,
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "position": faker.name.jobTitle(),
        "rating": number,
        "star": <img src={star} className="star" alt="" style={imageStyle} />
    },
    {
        "key": 1,
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "position": faker.name.jobTitle(),
        "rating": number,
        "star": <img src={star} className="star" alt="" style={imageStyle} />
    },
    {
        "key": 2,
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "position": faker.name.jobTitle(),
        "rating": number,
        "star": <img src={star} className="star" alt="" style={imageStyle} />
    },
    {
        "key": 3,
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "position": faker.name.jobTitle(),
        "rating": number,
        "star": <img src={star} className="star" alt="" style={imageStyle} />
    },
    {
        "key": 4,
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "position": faker.name.jobTitle(),
        "rating": number,
        "star": <img src={star} className="star" alt="" style={imageStyle} />
    },
]

export default Customer_staffList