const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        account: {
            type: String,
            required: [true, '請輸入帳號'],
            unique: [true, '帳號目前已存在'],
            validate: {
                validator: function (val) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(val.toString());
                },
                message: (props) => `${props.value} 必須包含一個英文字母大寫及一個數字和至少8個位元`,
            },
        },
        password: {
            type: String,
            required: [true, '請輸入密碼'],
            minLength: [6, '密碼最少要六個位元'],
        },
        firstName: { type: String, require: [true, '請輸入姓氏'] },
        lastName: { type: String, require: [true, '請輸入名字'] },
        age: { type: Number },
        email: { type: String },
        role: { type: String, default: 'member' },
    },
    { timestamps: true }
);

// //fire a function after doc saved to db
// userSchema.post('save', function (next) {
//     console.log(this, 'this');
//     next();
// });
//fire a function before doc saved to db
// userSchema.pre("save", function (next) {
//     console.log(this, 'this');
//     next();
// });

module.exports = mongoose.model('user', userSchema);
