import firebase from 'firebase';

// 로컬을 용도
// export const API_BASE = 'http://localhost:7002';
// export const USER_BASE = 'http://localhost:7002/user';

// Heroku 서버에 접속 용도
export const API_BASE = 'https://github-search-hong.herokuapp.com';
export const USER_BASE = 'https://github-search-hong.herokuapp.com/user';

// email 계정 정규식
export const EMAIL_REG_EXP = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// firebase login 을 구현하기 위한 config 와 initialize 실행 메소드

export const firebaseConfig = {
    apiKey: "AIzaSyAOsMXIwn4Ha3GnZh9LCzZLyQvIj8qfToA",
    authDomain: "hongmovie-auth.firebaseapp.com",
    databaseURL: "https://hongmovie-auth.firebaseio.com",
    projectId: "hongmovie-auth",
    storageBucket: "hongmovie-auth.appspot.com",
    messagingSenderId: "902054885427",
    appId: "1:902054885427:web:e8af87c94e5ac598f98b46",
    measurementId: "G-KRLT360LGB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const FINDUSER_GIT = 'https://api.github.com/users';