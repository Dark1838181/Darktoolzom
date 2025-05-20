const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/get-data', async (req, res) => {
    const apiUrl = 'https://taixiu.zomvip888.club/api/luckydice/GetSoiCau ';

    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Referer': 'https://taixiu.zomvip888.club/ ',
        'Origin': 'https://taixiu.zomvip888.club ',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'TE': 'Trailers'
    };

    try {
        const response = await axios.get(apiUrl, { headers });
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json({
                error: 'Server trả lỗi',
                status: error.response.status,
                data: error.response.data
            });
        } else if (error.request) {
            res.status(504).json({ error: 'Không nhận được phản hồi từ server' });
        } else {
            res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
        }
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
