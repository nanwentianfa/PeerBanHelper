@echo off
chcp 65001
title PeerBanHelper (低内存模式)
start ./jre/bin/java.exe -Xmx168M -Xms16M -Xss512k -XX:+UseG1GC -XX:+UseStringDeduplication -XX:+ShrinkHeapInSteps -Dfile.encoding=UTF-8 -Dpbh.usePlatformConfigLocation=true -Dpbh.release=install4j -Djava.awt.headless=true -Dpbh.geoIpCache.timeout=30000 -Dpbh.geoIpCache.size=100 -Dpbh.moduleMatchCache.weight=25000 -Dpbh.modulematchcache.timeout=30000 -Dpbh.gui.logs.maxSize=50 -Dpbh.logger.logEntryDeque.size=100 -Dpbh.logger.ringDeque.size=50 -Dpbh.module.activeMonitorModule.diskWriteCache.timeout=30000 -Dpbh.module.activeMonitorModule.diskWriteCache.size=1500 -Dpbh.module.progressCheatBlocker.recorder.timeout=30000 -Dpbh.module.progressCheatBlocker.recorder.weight=6000000 -jar PeerBanHelper.jar nogui nojcef
pause