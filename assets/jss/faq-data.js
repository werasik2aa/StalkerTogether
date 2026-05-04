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
                name: "OnICustomScriptAction(LPCSTR script_name, LPCSTR script_funct, LPCSTR script_args, bool OnlyToServer, u32 snet)",
                description: "This function is used to send a custom action to clients.\n If it is called from a client, it will run on the host and then be resent to all clients.\nIf it is called from the host, the flag is ignored, and the host sends the event to all clients.\nIf a client sends it with the flag set to true, it will run only on the host.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\n-- EXAMPLES\nGameManager:OnICustomScriptAction(\"weapon_giver\", \"give_weapon\", \"'wpn_knife', 3\", 1\", false)\nGameManager:OnICustomScriptAction(\"ui_sleep_dialog\", \"sleep_test\", \"\", false)"
            },
            {
                name: "OnICustomScriptAction(LPCSTR lua_line, bool OnlyToServer, u32 snet)",
                description: "This function is used to send a custom action to clients.\n If it is called from a client, it will run on the host and then be resent to all clients.\nIf it is called from the host, the flag is ignored, and the host sends the event to all clients.\nIf a client sends it with the flag set to true, it will run only on the host.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\n-- EXAMPLES\nGameManager:OnICustomScriptAction(\"weapon_giver\", \"give_weapon\", \"'wpn_knife', 3, 1\", false)\nGameManager:OnICustomScriptAction(\"ui_sleep_dialog\", \"sleep_test\", \"\", false)"
            },
            {
                name: "OnICustomAnimation(LPCSTR ANIM_NAME, LPCSTR APPEAR_ITEM, bool Force, float Delay, LPCSTR SND_NAME)",
                description: "This function controls the playing of custom player animations. \nIt Dictates the .omf animation used, the item appearing, the override, the delay, and the chosen sound.\nYou should understand what you want to do!",
                example: "local GameManager = SteamGameManager()\nGameManager:OnICustomAnimation(\"sit_idle_0\", \"bread\", true, 1.2, \"sidor_talk_2\")"
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
                name: "GetMySNETID()",
                description: "This entry determines the specific NETID the player will use while connected to the server.\nIt determines which player sends and recieves packets on the network, and what packets are recieved.\nYou should understand what you want to do!",
                example: "local snetid = GameManager:GetMySNETID()"
            },
            {
                name: "GetNetID()",
                description: "Returns the player’s unique network ID, which is used to identify and send data to that specific player across the network.\nYou should understand what you want to do!",
                example: "local obj = level.object_by_id(346)   \nlocal snetid = obj:GetNetID()"
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
                name: "SyncTaskWith(u32 SNET, void* datat, LPCSTR title_nt, LPCSTR descr_nt, u16 TaskGIVER, u16 TaskStage, bool newa)",
                description: "This function used to sync task with client. Example when task stuck or need to update it on client's side!",
                example: "local GameManager = SteamGameManager()\nlocal ServerSOSOCK = SteamServer()\nlocal PlayerManager = GameManager:GetPlayerManager()\nlocal pdata = PlayerManager:GetPlayerDataAtIndex(1) -- HOST IS 0\nif pdata then\n    local id = pdata:GetNetID()\n    local tma = task_manager.get_task_manager().task_info[...]\n    PlayerManager:SyncTaskWith(PlayerNetID, tma.t, tma.current_title or '', tma.current_descr or '', tma.task_giver_id or 65535, tma.stage, false)\nend"
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
            },
            {
                name: "mp_olmode",
                description: "This command used for switch to LAN/Online mode",
                example: "mp_olmode 0 - Disable Online mode (Enable LAN mode)\nmp_olmode 1 - Enable Online Mode (Disable LAN connection)"
            },
            {
                name: "mp_nickname",
                description: "This command used for change current nickname",
                example: "mp_nickname werasik2aa"
            }
        ]
    },
    {
        id: "steamappi",
        title: "Steam api controll",
        functions: [
            {
                name: "Steam NAT Traversal guide",
                description: "To use Online mode connection you can use steam, but if you don't have steam overlay",
                example: "1. Create 'steam_appid.txt' in game directory/bin\n2. Type in it 480\n3. Now run game\n4. If steam overlay still not works, try to create that file in game root directory\nIMPORTANT: Need to sure that steam is turned on!"
            },
            {
                name: "Steam Overlay in game",
                description: "Use it to connect to your Steam Friends. Usually need",
                example: "1. Press Shift+Tab.\n2. Press right mouse button on friend\n3. Press connect to game\n4. Wait when it will be connected!"
            },
            {
                name: "Steam Restrictions",
                description: "Use it to connect to your Steam Friends. Usually need",
                example: "If you're developper steamappi has limitations on data traffic!\nIf you have very big data arrays or packets which you want to sync, need to chunk them!\n Easy way make delay for rest second thread when it flush buffer.\n(CustomScriptAction always reliable packet!)"
            }, 
            {
                name: "How to enable LAN connections",
                description: "This command used for switch to LAN/Online mode",
                example: "Check about 'mp_olmode' in commands divide"
            },
        ]
    },
];