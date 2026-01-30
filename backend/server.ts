import express, { type Request, type Response} from "express";
import cors from "cors";

type LeaderboardItem = {
    player: string;
    score: number;
};

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req: Request, res: Response) => {
    res.json({ message: "OK" });
});

app.get("/api/leaderboard-summary", (req: Request, res: Response) => {
    const summaryData: LeaderboardItem[] = [
        { player: "Spencer", score: 9999 },
        { player: "Raf", score: -9999 },
        { player: "Yeison", score: -2 }
    ];

    res.json(summaryData);
});

app.get("/api/leaderboard", (req: Request, res: Response) => {
    const summaryData: LeaderboardItem[] = [
        { player: "Spencer", score: 9999 },
        { player: "Raf", score: -9999 },
        { player: "Yeison", score: -2 },
        { player: "Ken", score: 1283 },
        { player: "Dylan", score: 132 },
        { player: "Vi", score: 12312 },
        { player: "Cris", score: 3213 },
        { player: "Vini", score: 14143 }
    ];

    res.json(summaryData);
});

app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`);
});