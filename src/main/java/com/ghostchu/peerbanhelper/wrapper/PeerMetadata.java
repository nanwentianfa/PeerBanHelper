package com.ghostchu.peerbanhelper.wrapper;

import com.ghostchu.peerbanhelper.peer.Peer;
import com.ghostchu.peerbanhelper.torrent.Torrent;
import com.ghostchu.peerbanhelper.util.LazyLoad;
import com.maxmind.geoip2.model.AsnResponse;
import com.maxmind.geoip2.model.CityResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.Nullable;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PeerMetadata implements Comparable<PeerMetadata> {
    private String downloader;
    private UUID randomId;
    private TorrentWrapper torrent;
    private PeerWrapper peer;
    private String reverseLookup = "N/A";
    private LazyLoad<CityResponse> geo;
    private LazyLoad<AsnResponse> asn;

    public PeerMetadata(String downloader, Torrent torrent, Peer peer,
                        @Nullable LazyLoad<CityResponse> cityResponse, @Nullable LazyLoad<AsnResponse> asnResponse) {
        this.randomId = UUID.randomUUID();
        this.downloader = downloader;
        this.torrent = new com.ghostchu.peerbanhelper.wrapper.TorrentWrapper(torrent);
        this.peer = new com.ghostchu.peerbanhelper.wrapper.PeerWrapper(peer);
        if (cityResponse != null) {
            this.geo = cityResponse;
        }
        if (asnResponse != null) {
            this.asn = asnResponse;
        }
    }


    @Override
    public int compareTo(PeerMetadata o) {
        return this.randomId.compareTo(o.randomId);
    }
}
