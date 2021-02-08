class ImageResponse{
    constructor(uri,filesize,width,height,filename){
        this.uri = uri;
        this.fileSize = filesize;
        this.width = width;
        this.height = height;
        this.fileName = filename;
    }
}

export default ImageResponse;