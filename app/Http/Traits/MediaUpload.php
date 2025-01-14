<?php

namespace App\Http\Traits;

use Illuminate\Support\Facades\Storage;
use App\Models\Media;
use Illuminate\Support\Str;

trait MediaUpload
{
    /**
     * @param mixed  $file
     *
     * @return mixed
     */

    public function upload($media)
    {
        $mediaName = $media->getClientOriginalName();
        $ext = $media->getClientOriginalExtension();

        $name =  Str::random() .  time();
        $mediaPath = $name . $ext;

        $mediaPath = Storage::put('media', $media);

        return Media::create(
            [
                'name'    => $mediaName,
                'path'    => $mediaPath,
            ]
        );
    }

    public function updateMedia($id, $media, $prevFileName)
    {
        $mediaName = $media->getClientOriginalName();
        $ext = $media->getClientOriginalExtension();

        $name =  Str::random() .  time();
        $mediaPath = $name . $ext;

        $mediaPath = Storage::put('media', $media);

        if ($prevFileName) {
            $this->remove($prevFileName);
        }

        return Media::where('id', $id)->update(
            [
                'name'    => $mediaName,
                'path'    => $mediaPath,
            ]
        );
    }


    public function remove($media)
    {
        if (checkFileExist($media)) {
            return Storage::delete($media);
        }
    }
}
