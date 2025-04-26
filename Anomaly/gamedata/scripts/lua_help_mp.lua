class MPGameManager {
    void SetFlag(bool BH);
    bool GetFlag();
    void SetFriendFire(bool FF);
    bool IsFriendFireEnabled();
    void SetUpdateRate(u16 Updaterayt); -- FREQUENCY SEND UNRELIABLE SEND PACKETS LIKE POSITIONS/ROTATIONS
    void SetTestMyClient(bool TT);
    void EnableDebugs(bool c, bool r);
    bool IsStalker(CSE_Abstract* sid);
    bool IsActor(CSE_Abstract* sid);
    bool IsSmartTerrain(CSE_Abstract* sid);
    bool IsMonster(CSE_Abstract* sid);
    bool IsGraph(CSE_Abstract* sid);
    bool IsTrader(CSE_Abstract* sid);
    bool IsItem(CSE_Abstract* sid);
    bool IsInvbox(CSE_Abstract* sid);
    bool IsSquad(CSE_Abstract* sid);
    bool IsOutfit(CSE_Abstract* sid);
    bool IsAnomalyArtefact(CSE_Abstract* sid);
    bool IsAmmo(CSE_Abstract* sid);
    bool IsWeapon(CSE_Abstract* sid);
    bool IsAnomalyZone(CSE_Abstract* sid);
    u16 PlayPlayerAnim(u32 s_id, LPCSTR ANA, LPCSTR ITEM, bool force);
    u16 PlayPlayerAnim(CSE_ALifeDynamicObject* sob, LPCSTR ANA, LPCSTR ITEM, bool ABO);
    bool IsItMyPlayer(u16 id);
    u16 GetServerIDByLocalID(u16 ii);
    void SetServerIDByLocalID(u16 CLIENTID, u16 HOSTID);
    u16 GetLocalIDByServerID(u16 ii);
    void ShowConnectionError(u8 t);
    void SetGameLoaded(bool st);
    bool GetGameLoaded();

    -- Manual coroutines
    void RegisterTimeEvent(u32 ACTIO, u32 CLID, u32 DELAY, u16 ITEM = u16(-1), u32 SECONDDELAY_USELESS = 0);
    void UnregisterTimeEvent(u32 ACTOIT);
    void ForceResetAnimation(u32 snet);
    void ResetAnimation(CSE_ALifeDynamicObject* so);
    void ManualClientUpdate();
    void ManualServerUpdate();
    void ManualClientUpdateS();
    void ManualProcessEntities();
    void ForceSyncMovement();
    void ForceSyncMyDevice();
    void ForceSyncMyWeapon();
    void ForceSyncMyVisual();
    void ClearData(bool CleanUP);

    -- Server
    void SetTickRate(u16 Tickrayt);
    void SetMaxPlayers(BYTE PCOUNT);
    void SetServerName(LPCSTR PNAME);

    -- PLAYER
    void SetNickName(LPCSTR PNAME);
    u16 SpawnInPlayer(CSE_ALifeDynamicObject* s_id, LPCSTR s_name);
    u16 SpawnInNPC(CSE_ALifeDynamicObject* s_id, LPCSTR s_name);
    u16 SpawnInNPC(void* obja, LPCSTR s_name);
    void DespawnPlayer(u32 s_id, bool era = true);

    -- REQUEST
    void OnRequest();
    PlayerData* GetPlayerDataByID(u32 id);
    PlayerData* GetPlayerDataAtIndex(u8 id);
    bool GetFriendFire(); -- IS FriendFire Enabled

    -- PLAYER CALLBACKS
    void OnILoaded();
    void OnIDrop(CSE_ALifeDynamicObject* obj);
    void OnIUse(CSE_ALifeDynamicObject* obj);
    void OnIInteract(CSE_ALifeDynamicObject* obj, u8 typef);
    void OnIPickup(CSE_ALifeDynamicObject* obj);
    void OnIFire(u8 type);
    void OnIReload(u8 type);
    void OnIChangedGun(LPCSTR name);
    void OnIChangedDevice(LPCSTR name);
    void OnIShowHide(u8 state); -- not used | not implemented
    void OnIMovementState(u16 slot, u16 idx, u32 Val);
    void OnICustomAnimation(LPCSTR TbIANASHA_ANIM_NAME, LPCSTR APPEAR_ITEM, bool Force, float Delay, LPCSTR SND_NAME);
    void OnIMovementPosition(Fvector d);
    void OnIMovementRotation(Fvector d, float ln);
    void OnIChangedVisual(LPCSTR d);
    void OnIInfoPortion(LPCSTR D, bool d);
    void OnIChatMSG(LPCSTR D); -- max 4096 chars
    void OnILevelChanging();
    void OnEntityDamage(SHit* se, float dmg);
    void OnIGetTask(CGameTask* datat, LPCSTR title_nt, LPCSTR descr_nt, u16 TaskGIVER, u16 Stage, bool newa);
    void OnForcedTaskState(LPCSTR title_nt, LPCSTR HUISOSI_STATE);
    void OnICustomScriptAction(LPCSTR CALLNAME, bool OnlyToServer); -- LIKE ...functor("MYACTION.CALThisBREED", lua_function) -> lua_function()
    void OnIGetReward(u16 count);
    void OnIStashOpen(CSE_ALifeDynamicObject* box);
    void OnQuestSpawner(CSE_ALifeDynamicObject* obj);
    void OnIWantCompanion(CSE_ALifeDynamicObject* obj);
    -- SENDMONEY TO PLAYER
    void OnISendReward(u32 MoneyCount, LPCSTR NICKNAME);
    void OnISendReward(u32 MoneyCount, u32 ID);
    
    -- Server actions / CALLBACKS
    void OnEntityDespawned(CSE_Abstract* o, bool AsClient);
    void OnEntityDestroyed(u16 id);
    void OnEntityDead(u16 id);
    void OnEntityOnlineOffline(CSE_ALifeDynamicObject* obj, bool Online);
    void OnEntitySpawned(CSE_ALifeDynamicObject* data);
    void OnEntitySpawnedToClient(CSE_ALifeDynamicObject* obj, u32 snet);
    void ServerEntitiesUpdate();
    void OnEntityUpdate(CSE_ALifeDynamicObject* OBJ);
    void OnEntityShoot(u16 ID);
    void SendLevelObjects(u32 snet, LPCSTR LV_NAME);
    void KickPlayer(u32 s_netid);
    void RegisterObject(CSE_ALifeDynamicObject* obj);
    void UnregisterObject(CSE_ALifeDynamicObject* obj);
    void OnWeatherChanged(LPCSTR weathe, bool forca);
    void OnWeatherFXChanged(LPCSTR weather);
    void OnTimeChanged();
    void OnCustomSound(LPCSTR Name, Fvector pos, u16 EID);
    void SyncAllPortions();
    void OnEmissionPsy(bool IsPsy, bool Enabled);
    void OnSaveGame();
}
class MClient {
    u32 connectionID();
    void CreateConnection(LPCSTR connectionIP);
    void Disconnect();
    bool IsConnected();
    bool IsSteamInterface();
}
class MServer {
    u32 get_players_count();
    u32 get_player_by_index();
    void erase_player_by_id();
    bool is_client_exist(u32 id);
    bool is_player_exist(u32 id);
    void OpenListenSocket(u32 PORT);
    void CloseConnection(u32 connection, LPCSTR reasoun, u32 EMessageID);
    void CloseListenSocket();
    bool IsSteamInterface();
    bool IsSteamSocketOpen();
}