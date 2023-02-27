import { placesData } from "@/placesData"

export default function handler(req, res) {
    res.status(200).json(placesData) 
}