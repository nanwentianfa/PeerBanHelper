package com.ghostchu.peerbanhelper.gui;

import com.ghostchu.peerbanhelper.PeerBanHelperServer;

import java.util.logging.Level;

public interface GuiManager {
    void setup();

    String getName();

    boolean isGuiAvailable();

    void sync();

    void close();

    void onPBHFullyStarted(PeerBanHelperServer server);

    void createNotification(Level level, String title, String description);

    boolean supportInteractive();

    void createYesNoDialog(Level level, String title, String description, Runnable yesEvent, Runnable noEvent);

    void createDialog(Level level, String title, String description, Runnable clickEvent);

    ProgressDialog createProgressDialog(String title, String description, String buttonText, Runnable buttonEvent, boolean allowCancel);

    TaskbarControl taskbarControl();
}
