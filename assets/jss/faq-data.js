const faqData = [
    {
        id: "obtaining-classes",
        title: "Obtaining classes from luabind functions",
        functions: [
            {
                name: "SteamGameManager()",
                description: "This function is used to obtain the CSteamSocketGameManager class.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()"
            },
            {
                name: "SteamServer()",
                description: "This function is used to obtain the CSteamSocketServer class.\nYou should understand what you want to do!",
                example: "local ServerSOSOCK = SteamServer()"
            },
            {
                name: "SteamClient()",
                description: "This function is used to obtain the CSteamSocketClient class.\nYou should understand what you want to do!",
                example: "local ClientSOSOCK = SteamClient()"
            },
            {
                name: "GetPlayerManager()",
                description: "This function is used to obtain the CSteamSocketGameManager class.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal PlayerManager = GameManager:GetPlayerManager()"
            }
        ]
    },
    {
        id: "object-spawning",
        title: "Object spawning and destruction functions",
        functions: [
            {
                name: "alife_create_client(section, position, lv_id, gv_id, id_parent)",
                description: "This function is used to remotely spawn an object on the host side from a client without waiting.\nSends a spawn entity request to the host. The host spawns the object.",
                example: "alife_create_client(\"box\", db.actor:position(), 0, 0)"
            },
            {
                name: "alife_create_awaite(functa, section, position, lv_id, gv_id, id_parent)",
                description: "This function is used to remotely spawn an object on the host side from a client with waiting.\nSends a spawn entity request to the host. The host spawns the object. The client catches the event and calls functa(se_object)",
                example: "alife_create_awaite(function(se)\n    if se then\n        log(\"Object box spawned: \"..box:section_name())\n    end\nend, \"box\", db.actor:position(), 0, 0)"
            },
            {
                name: "alife_release_client(se_object)",
                description: "This function is used to remotely despawn an object on the host side from a client by se_object.\nSends a despawn entity request to the host. The host despawns the object.",
                example: "alife_release_client(alife_object(55))"
            },
            {
                name: "alife_release_client_id(id)",
                description: "This function is used to remotely despawn an object on the host side from a client by id.\nSends a despawn entity request to the host. The host despawns the object.",
                example: "alife_release_client_id(55)"
            },
            {
                name: "RequestEntityDespawn(CSE_ALifeDynamicObject* se)",
                description: "This function is used to remotely despawn an object on the host side from a client by id.\nSends a despawn entity request to the host. The host despawns the object.",
                example: "local GameManager = SteamGameManager()\nlocal se_obj = alife_object(55)\nGameManager:RequestEntityDespawn(se_obj)"
            }
        ]
    },
    {
        id: "player-manager",
        title: "Player manager functions",
        functions: [
            {
                name: "TeleportPlayer(u32 NetID, Fvector Position)",
                description: "This function is used to teleport a player to a position. THIS IS A HOST ACTION!\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    local pos = db.actor:position()\n    PlayerManager:TeleportPlayer(id, pos)\nend"
            },
            {
                name: "SendToAnotherLevel(u32 NetID, Fvector Position, u32 gvid, u32 lvid, Fvector Angle)",
                description: "This function is used to teleport a player to a position or level. THIS IS A HOST ACTION! Advanced version.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    local pos = db.actor:position()\n    local lvid = db.actor:level_vertex_id()\n    local gvid = db.actor:game_vertex_id()\n    PlayerManager:SendToAnotherLevel(id, pos, gvid, lvid, db.actor:direction())\nend"
            },
            {
                name: "KickPlayer(u32 NetID)",
                description: "This function is used to kick a player. THIS IS A HOST ACTION!\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    PlayerManager:KickPlayer(id)\nelse\n    local NETid = ServerSOSOCK:get_player_by_index(1) -- HOST IS 0\n    PlayerManager:KickPlayer(NETid)\nend"
            },
            {
                name: "DespawnPlayer(u32 SNET, bool Erase)",
                description: "This function is used to force erase player data if need.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    PlayerManager:DespawnPlayer(id, false)\nelse\n    local NETid = ServerSOSOCK:get_player_by_index(1) -- HOST IS 0\n    PlayerManager:DespawnPlayer(NETid, false)\nend"
            }
        ]
    },
    {
        id: "weather-time",
        title: "Weather and time synchronization functions",
        functions: [
            {
                name: "OnEmissionPsy(bool IsPsy, bool State)",
                description: "This function is used to send psy or emission start/stop state.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nGameManager:OnEmissionPsy(true, true) -- START PSY_STORM\nGameManager:OnEmissionPsy(false, true) -- START EMISSION"
            },
            {
                name: "OnTimeChanged()",
                description: "This function is used to synchronize time with clients.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nGameManager:OnTimeChanged()"
            },
            {
                name: "OnWeatherChanged()",
                description: "This function is used to synchronize weather with clients.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nGameManager:OnWeatherChanged()"
            },
            {
                name: "OnWeatherFXChanged()",
                description: "This function is used to synchronize weather effects with clients.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nGameManager:OnWeatherFXChanged()"
            }
        ]
    },
    {
        id: "custom-actions",
        title: "Custom actions synchronization functions",
        functions: [
            {
                name: "OnICustomScriptAction(LPCSTR scrip_name, LPCSTR script_funct, LPCSTR script_args, bool OnlyToServer)",
                description: "This function is used to send custom action to clients.\nExecuteOnlyOnHost situations if:\n1. Called from client so will be runned on host.\n2. Called from host this flag will be ignored. Host sends that event to all clients!\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\n-- EXAMPLES\nGameManager:OnICustomScriptAction(\"weapon_giver\", \"give_weapon\", \"'wpn_knife', 3\", 1\", false)\nGameManager:OnICustomScriptAction(\"ui_sleep_dialog\", \"sleep_test\", \"\", false)"
            },
            {
                name: "OnICustomAnimation(LPCSTR EBLANSKAYA_ANIM_NAME, LPCSTR APPEAR_ITEM, bool Force, float Delay, LPCSTR SND_NAME)",
                description: "This function used to play custom animation of us.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal se_obj = alife_object(55)\nGameManager:OnICustomAnimation(\"sit_idle_0\", \"bread\", true, 1.2, \"sidor_talk_2\")"
            }
        ]
    },
    {
        id: "quest-sync",
        title: "Quest sync actions",
        functions: [
            {
                name: "OnIGetTask(CGameTask* datat, u16 TaskGIVER, u16 Stage)",
                description: "This function is used to send new task or task state to engine. New or Update task\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\n... In task_manager.script\nlocal tma = self.task_info[task_id]\nbool IsNewTsak = true\nGameManager:OnIGetTask(tma.t, tma.task_giver_id or 65535, tma.stage)"
            },
            {
                name: "OnForcedTaskState(LPCSTR ID, LPCSTR STATE)",
                description: "This function is used to send forced task state. For handle in lua\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\n... In task_manager.script\nlocal tma = self.task_info[task_id]\n-- SEND OLD TASK\n-- When old task was updated. Need only to update params.\n-- In anomaly used to complete some sort of tasks.\nGameManager:OnForcedTaskState(task_id, \"complete\")"
            },
            {
                name: "OnIInfoPortion(LPCSTR Name, bool state)",
                description: "This function used for sync info portion. Enable or Disable state.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nGameManager:OnIInfoPortion(\"x18_dream_hell\", true) -- ENABLE\nGameManager:OnIInfoPortion(\"x18_dream_hell_spawned\", false) -- DISABLE"
            },
            {
                name: "BlockInfoPortion(LPCSTR)",
                description: "This function is used to block send infoportion from client's or host's side.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nGameManager:BlockInfoPortion(\"x16_zasada_2\")"
            },
            {
                name: "OnEntitySpawned(CSE_ALifeDynamicObject* obj)",
                description: "This function used for send spawn event of spawned entity. (Used like for sync furniture?)\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal se_obj = alife_object(55)\nGameManager:OnEntitySpawned(se_obj)"
            },
            {
                name: "OnCustomSound(LPCSTR Name, Fvector pos, u16 EID)",
                description: "This function used to play specified sound on place or npc\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nGameManager:OnCustomSound(\"sidor_talk_2\", db.actor:position(), 0)\nGameManager:OnCustomSound(\"sidor_talk_2\", db.actor:position(), alife_object(55))"
            },
            {
                name: "OnCustomSound(LPCSTR Name, Fvector pos, CSE_ALifeDynamicObject* EID)",
                description: "This function used to play specified sound on place or npc\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal se_obj = alife_object(55)\nGameManager:OnCustomSound(\"sidor_talk_2\", se_obj.position, se_obj)"
            },
            {
                name: "RegisterObject(CSE_ALifeDynamicObject* obj)",
                description: "This function used for registering of object to order in sync list\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal se_obj = alife_object(55)\nGameManager:RegisterObject(se_obj)"
            },
            {
                name: "UnregisterObject(CSE_ALifeDynamicObject* obj)",
                description: "This function used for unregistering of object to order in sync list\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal se_obj = alife_object(55)\nGameManager:UnregisterObject(se_obj)"
            },
            {
                name: "OnIWantCompanion(CSE_ALifeDynamicObject* obj)",
                description: "This function used to hire a companion on host's side.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal se_obj = alife_object(55)\nGameManager:OnIWantCompanion(se_obj)"
            },
            {
                name: "OnIWantCompanion(u16 obj)",
                description: "This function used to hire a companion on host's side.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nGameManager:OnIWantCompanion(55)"
            },
            {
                name: "OnINoWantCompanion(u16 obj)",
                description: "This function used to fire a companion on host's side.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nGameManager:OnINoWantCompanion(55)"
            },
            {
                name: "OnINoWantCompanion(CSE_ALifeDynamicObject* obj)",
                description: "This function used to fire a companion on host's side.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal se_obj = alife_object(55)\nGameManager:OnINoWantCompanion(se_obj)"
            },
            {
                name: "SendRewardTo(u32 TO, u32 FROM, u32 count)",
                description: "This function used to send money to a client\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nlocal pdatam = PlayerManager:GetPlayerDataAtIndex(0) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    local id2 = pdatam:GetNetID()\n    PlayerManager:SendRewardTo(id, id2, 100)\nend"
            },
            {
                name: "SendRewardToAll(u32 count)",
                description: "This function used to send money to all clients\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nPlayerManager:SendRewardToAll(count)"
            },
            {
                name: "SendDamageTo(u32 TO, u32 FROM, SHit* hit)",
                description: "This function used to damage to client\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nlocal pdatam = PlayerManager:GetPlayerDataAtIndex(0) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    local id2 = pdatam:GetNetID()\n    local hit = hit()\n    ...\n    PlayerManager:SendDamageTo(id, id2, hit)\nend"
            }
        ]
    },
    {
        id: "syncing-misc",
        title: "Syncing with clients and misc",
        functions: [
            {
                name: "GetLocalIDByServerID(u16 ID)",
                description: "This function used to get local id by server ID.\nMean REMOTE HOST-ID -> OUR LOCAL-ID",
                example: "local GameManager = SteamGameManager()\n...\nGameManager:GetLocalIDByServerID(received_id)"
            },
            {
                name: "GetServerIDByLocalID(u16 ID)",
                description: "This function used to get remote id by local ID.\nMean OUR LOCAL-ID -> REMOTE HOST-ID",
                example: "local GameManager = SteamGameManager()\n...\nGameManager:GetServerIDByLocalID(mydata.item_id)"
            },
            {
                name: "SyncWeatherWith(u32 TO, LPCSTR Weather, bool force)",
                description: "This function used to force sync weather with client",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    PlayerManager:SyncWeatherWith(id, 'w_clear1', true)\nend"
            },
            {
                name: "SyncEmissionPsy(u32 SNET, bool Psy, bool state)",
                description: "This function used to force sync weather with client",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    PlayerManager:SyncEmissionPsy(id, true, true) -- START PSY_STORM\n    PlayerManager:SyncEmissionPsy(id, false, true) -- START EMISSION\nend"
            },
            {
                name: "SyncObjectWithPlayer(u32 TO, CSE_ALifeDynamicObject* obj)",
                description: "This function used to sync object with player. Like object that not was online or not spawned on client side.\n Example when need to sync objects on another levels.",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    local se_obj = alife_object(55)\n    PlayerManager:SyncObjectWithPlayer(id, se_obj)\nend"
            },
            {
                name: "SyncTaskWith(u32 SNET, void* datat, LPCSTR title_nt, LPCSTR descr_nt, u16 TaskGIVER, u16 TaskStage, bool newa)",
                description: "This function used to sync task with client. Example when task stuck or need to update it on client's side!",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    local tma = task_manager.get_task_manager().task_info[...]\n    PlayerManager:SyncTaskWith(PlayerNetID, tma.t, tma.current_title or '', tma.current_descr or '', tma.task_giver_id or 65535, tma.stage, false)\nend"
            },
            {
                name: "IsItMyPlayer(u16 TO)",
                description: "This function used to check is this object is it player",
                example: "local GameManager = SteamGameManager()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal obj_id = ...\nlocal pizda_bool = PlayerManager:IsItMyPlayer(obj_id)"
            },
            {
                name: "AddItem(u32 SNET, LPCSTR name)",
                description: "This function used to add item to inventory. Like if it not added by usuall method.\nUsualy quests or inviseble items...",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    PlayerManager:AddItem(id, 'wpn_knife')\nend"
            },
            {
                name: "RemoveItem(u32 SNET, LPCSTR name)",
                description: "This function used to remove item from inventory. Like if it not removed by usuall method.\nUsualy quests like force removed items.",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    PlayerManager:RemoveItem(id, 'wpn_knife')\nend"
            }
        ]
    },
    {
        id: "console-commands",
        title: "Console commands",
        functions: [
            {
                name: "say",
                description: "This command used to chat in message from console.",
                example: "say pizda_ruly"
            },
            {
                name: "sync_weatherfx_with_clients",
                description: "This command used to sync weather fx with clients",
                example: "sync_weatherfx_with_clients"
            },
            {
                name: "sync_weather_with_clients",
                description: "This command used to sync weather with clients",
                example: "sync_weather_with_clients"
            },
            {
                name: "sync_time_with_clients",
                description: "This command used to sync time with clients",
                example: "sync_time_with_clients"
            },
            {
                name: "mdisconnect",
                description: "This command used for force disconnect",
                example: "mdisconnect"
            },
            {
                name: "reconnect",
                description: "This command used for reconnect to server (loads last save)",
                example: "reconnect"
            },
            {
                name: "connect",
                description: "This command used for connect to server",
                example: "connect 127.0.0.1:44139\nconnect 127.0.0.1"
            },
            {
                name: "kickplayer",
                description: "This command used to kick player",
                example: "kickplayer werasik2aa"
            },
            {
                name: "sendmoney",
                description: "This command used for send money to player",
                example: "sendmoney werasik2aa 3500"
            }
        ]
    }
];