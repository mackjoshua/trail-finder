import { placesPhotos } from "@/placesPhotos";

export default function handler(req, res) {
    res.status(200).json(placesPhotos) 
}