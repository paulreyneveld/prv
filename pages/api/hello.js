// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === 'POST') {
    res.status(200).json({ type: 'POST' })
  }
  else if (req.method === 'GET') {
    res.status(200).json({ type: 'GET'})
  }
}


