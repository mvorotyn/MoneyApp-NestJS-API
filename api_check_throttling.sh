    runCurl() {
        md5_checksum=$(md5sum $1|cut -d' ' -f 1)
        sha1_checksum=$(sha1sum $1|cut -d' ' -f 1)
        sha256_checksum=$(sha256sum $1|cut -d' ' -f 1)
        json_result="$(curl --silent -H 'Authorization:Basic XXXX' 'http://localhost:3005')"
        echo "$json_result"
    }

    for i in $(find $1 -type f);do
        runCurl $i &
    done