import config from "../../../gscale.config";

export function getCardUrl(id: string, extension = "webp") {
    return `${config.cardBaseUrl}/${id}.${extension}`;
}
