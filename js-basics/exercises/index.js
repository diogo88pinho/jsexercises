document.addEventListener("DOMContentLoaded", function () {

    var users = [
        {
            username: 'larry',
            email: 'larry@foo.com',
            yearsExperience: 22.1,
            favoriteLanguages: ['Perl', 'Java', 'C++'],
            favoriteEditor: 'Vim',
            hobbies: ['Fishing', 'Sailing', 'Hiking'],
            hometown: {
                city: 'San Francisco',
                state: 'CA'
            }
        },
        {
            username: 'jane',
            email: 'jane@test.com',
            yearsExperience: 33.9,
            favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
            favoriteEditor: 'Emacs',
            hobbies: ['Swimming', 'Biking', 'Hiking'],
            hometown: {
                city: 'New York',
                state: 'NY'
            }
        },
        {
            username: 'sam',
            email: 'sam@test.com',
            yearsExperience: 8.2,
            favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
            favoriteEditor: 'Atom',
            hobbies: ['Golf', 'Cooking', 'Archery'],
            hometown: {
                city: 'Fargo',
                state: 'SD'
            }
        },
        {
            username: 'anne',
            email: 'anne@test.com',
            yearsExperience: 4,
            favoriteLanguages: ['C#', 'C++', 'F#'],
            favoriteEditor: 'Visual Studio Code',
            hobbies: ['Tennis', 'Biking', 'Archery'],
            hometown: {
                city: 'Albany',
                state: 'NY'
            }
        },
        {
            username: 'david',
            email: 'david@test.com',
            yearsExperience: 12.5,
            favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
            favoriteEditor: 'VS Code',
            hobbies: ['Volunteering', 'Biking', 'Coding'],
            hometown: {
                city: 'Los Angeles',
                state: 'CA'
            }
        }
    ];

    function printEmails() {
        users.forEach(user => {
            console.log(user.email);
        });
    }

    function printHobbies() {
        users.forEach(user => {
            user.hobbies.forEach(hobby => {
                console.log(hobby);
            });
        });
    }

    function findHometownByState(state) {
        for (const user of users) {
            if (user.hometown.state == state) return user;
        }
        return null;
    }

    function allLanguages() {
        let languages = [];
        users.forEach(user => {
            user.favoriteLanguages.forEach(favoriteLanguages => {
                if (!languages.includes(favoriteLanguages))
                    languages.push(favoriteLanguages);
            });
        });
        return languages;
    }

    function hasFavoriteEditor(editor) {
        for (const user of users) {
            if (user.favoriteEditor == editor) return true;
        }
        return false;
    }

    function findByUsername(username) {
        for (const user of users) {
            if (user.username == username) {
                return user;
            }
        }
        return null;
    }

    function vowelCount(word) {
        let vowels = "aeiou";
        let array = [];
        for (const letter of word) {
            if (vowels.includes(letter)) {
                if (!array[letter]) array[letter] = 1;
                else array[letter]++;
            }
        }
        return array;
    }

    function removeVowels(word) {
        let vowels = "aeiou";
        for (let vowel of vowels) {
            word = word.replace(new RegExp(vowel, 'gi'), "");
        }
        return word;
    }

    function removeVowelsToArray(word) {
        let vowels = "aeiou";
        let arr = [];
        for (const letter of word) {
            if(!vowels.includes(letter)) arr.push(letter);
        }
        return arr;
    }

    // printEmails();
    // printHobbies();
    // console.log(findHometownByState('CA'));
    // console.log(allLanguages());
    // console.log(hasFavoriteEditor('VS Code'));
    // console.log(hasFavoriteEditor('Eclipse'));
    // console.log(findByUsername('david'));
    // console.log(vowelCount('incredible'));
    // console.log(vowelCount('awesome'));
    // console.log(removeVowels('amazing'));
    // console.log(removeVowels('fun'));
    // console.log(removeVowels('silly'));
    console.log(removeVowelsToArray('amazing'));
    console.log(removeVowelsToArray('fun'));
    console.log(removeVowelsToArray('silly'));

});