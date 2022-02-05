// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */


function bestFriend(friends) {
    // console.log(typeof friends)
    // if (typeof friends != "object") {
    //     return 'error';
    // }
    let largestName = friends[0];
    for (const friend of friends) {
        if (friend.length > largestName.length) {
            largestName = friend;
        }
    }
    return largestName;

}
const friendsName = ['rahat', 'fardush', 'rakib', 'shakil', 'munna', "Imran khan"];
const largeFriendName = bestFriend(friendsName);
console.log(largeFriendName);