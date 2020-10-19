import config from '../config';

// Generate QR code and LP url from client name
export const qrGen = (name) => {
    const cleanName = replaceChars(name);
    const prtUri = encodeURI(cleanName.trim().toLowerCase().replace(/\s|[/]|[.]/g, '-'));
    const pageUrl = prtUri.replace(/(--*)/g,'-');
    
    // QR Code
    const qrCode = createQrCode(pageUrl);
    return { page_url: pageUrl, qr_code: qrCode };
}

function createQrCode(url){
    const codeSize = '360';
    return `http://api.qrserver.com/v1/create-qr-code/?data=${config.lpUrl + url}&size=${codeSize}x${codeSize}`;
}

function replaceChars(name) {
    return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}