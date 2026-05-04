export const PROJECTS = [
    {
        emoji: "👋",
        title: "ポートフォリオサイト",
        desc: "今表示しているこのサイト。シンプルな Web サイトを作成しながら、Reactの基本的な概念を学びました。",
        img: "/react-portfolio.png",
        githubUrl: "#",
    },
    {
        emoji: "💬",
        title: "名言ジェネレーター",
        desc: "このプロジェクトでは、useEffect フックを使ったデータフェッチと、その注意点について重点的に学習しました。",
        img: "/random-quote.png",
        githubUrl: "#",
    },
    {
        emoji: "✏️",
        title: "作業用メモアプリ",
        desc: "このプロジェクトでは、stateの配列やオブジェクトを、イミュータブルに扱うReactの作法を学習しました。",
        img: "/simple-memo.png",
        githubUrl: "#",
    },
    {
        emoji: "💰",
        title: "割り勘計算機",
        desc: "このプロジェクトでは、Zustandを使用して、グローバルに状態を管理する実装を学習しました。",
        img: "/warikan-culculator.png",
        githubUrl: "#",
    },
];

// export const SOCIAL = {
//     github: "#",
//     twitter: "#",
//     blog: "#",
// };  


// index.js (または constants.js)
import { FaXTwitter, FaGithub, FaRegFileLines } from "react-icons/fa6";

export const SOCIAL = {
    github: {
        href: "#",
        Icon: FaGithub,
        label: "GitHub"
    },
    twitter: {
        href: "#",
        Icon: FaXTwitter,
        label: "Twitter"
    },
    blog: {
        href: "#",
        Icon: FaRegFileLines,
        label: "Blog"
    },
};


export const BASE_URL =
    import.meta.env.MODE === "production" ? "https://eito-github.github.io/test" : "";