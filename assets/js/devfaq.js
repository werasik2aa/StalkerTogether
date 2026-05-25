const sections = [
  {
    id: 'classes',
    title: 'Сетевые классы',
    intro: 'Luabind-функции для получения основных классов сетевого API.',
    methods: [
      ['SteamGameManager()', 'engine binding', 'Возвращает CSteamSocketGameManager, основной объект управления сетевой синхронизацией.', 'local GameManager = SteamGameManager()'],
      ['SteamServer()', 'engine binding', 'Возвращает CSteamSocketServer для серверной стороны и работы с подключениями.', 'local ServerSOSOCK = SteamServer()'],
      ['SteamClient()', 'engine binding', 'Возвращает CSteamSocketClient для клиентского подключения.', 'local ClientSocks = SteamClient()'],
      ['GameManager:GetPlayerManager()', 'engine binding', 'Возвращает PlayerManager для операций над игроками.', 'local PlayerManager = SteamGameManager():GetPlayerManager()']
    ]
  },
  {
    id: 'state',
    title: 'Состояние подключения',
    intro: 'Глобальные helper-функции из MPMain_STOGETHER.script и condition-wrapper-ы.',
    methods: [
      ['IIsConnected()', 'MPMain_STOGETHER', 'Проверяет, подключен ли сокет к серверу.', 'if IIsConnected() then log("connected") end'],
      ['IIsHosted()', 'MPMain_STOGETHER', 'Проверяет, открыт ли серверный Steam socket.', 'if IIsHosted() then log("host socket opened") end'],
      ['IIsHost()', 'MPMain_STOGETHER', 'Возвращает true если текущая сессия хост.', 'if IIsHost() then HostOnlyAction() end'],
      ['IIsClient()', 'MPMain_STOGETHER', 'Возвращает true, если текущая сессия клиент.', 'if IIsClient() then RequestHostAction() end'],
      ['xr_conditions.IIsConnected()', 'MPMain_STOGETHER', 'Condition-wrapper для логики схем.', '{=IIsConnected()}'],
      ['xr_conditions.IIsClient()', 'MPMain_STOGETHER', 'Condition-wrapper для логики схем.', '{=IIsClient()}'],
      ['xr_conditions.IIsHost()', 'MPMain_STOGETHER', 'Condition-wrapper для логики схем.', '{=IIsHost()}'],
      ['xr_conditions.is_mp_actor(enemy, object)', 'MPMain_STOGETHER', 'Возвращает true, если enemy является игрок.', '{=is_mp_actor}']
    ]
  },
  {
    id: 'alife',
    title: 'ALife: спавн и удаление',
    intro: 'Основные публичные методы для создания и удаления объектов в кооперативе.',
    methods: [
      ['alife_register(se)', 'MPMain_STOGETHER', 'Регистрирует server entity через alife():register(se).', 'alife_register(se_obj)'],
      ['alife_create_client(sec, pos, lid, gid, id, state)', 'MPMain_STOGETHER', 'Создает объект с учетом роли. На клиенте отправляет объект в сетевой spawner.', 'alife_create_client("af_medusa", db.actor:position(), db.actor:level_vertex_id(), db.actor:game_vertex_id())'],
      ['alife_create_awaite(funca, sec, pos, lid, gid, id, state)', 'MPMain_STOGETHER', 'Создает объект и вызывает funca(se_obj), когда объект пойман клиентом.', 'alife_create_awaite(function(se) if se then log(se:section_name()) end end, "inv_backpack", pos, lid, gid)'],
      ['alife_create_special_awaite(funca, special, sec, pos, lid, gid, id, state)', 'MPMain_STOGETHER', 'Версия с дополнительной функцией special(se_obj) перед сетевой отправкой.', 'alife_create_special_awaite(onReady, function(se)\n	se:set_yaw(0) \nend\n, "jup_b219_gate", pos, lid, gid)'],
      ['alife_create_local(sec, pos, lid, gid, id, state)', 'MPMain_STOGETHER', 'Создает объект локально через alife():create_local; на хосте использует alife_create.', 'local se = alife_create_local("grenade_f1", pos, lid, gid)'],
      ['alife_release_full(se_obj, msg)', 'MPMain_STOGETHER', 'Принудительно удаляет объект через alife():release_local.', 'alife_release_full(se_obj, "cleanup")'],
      ['alife_release_client(se_obj, msg)', 'MPMain_STOGETHER', 'На хосте удаляет напрямую, на клиенте отправляет запрос despawn хосту.', 'alife_release_client(alife_object(id))'],
      ['alife_release_client_id(id, msg)', 'MPMain_STOGETHER', 'Удаление через alife_release_client по id.', 'alife_release_client_id(55)'],
      ['alife_release_full_id(id, msg)', 'MPMain_STOGETHER', 'Принудительное локальное удаление по id.', 'alife_release_full_id(55)'],
      ['alife_create_item(section, object, t)', 'MPMain_QuestPatches', 'Переопределенный helper: если предмет выдается удаленному actor, отправляет создание item нужному клиенту.', 'alife_create_item("bad_psy_helmet", actor_obj)']
    ]
  },
  {
    id: 'checks',
    title: 'Проверки объектов и предметов',
    intro: 'Boolean-helper-ы для классов объектов и типов инвентаря.',
    methods: [
      ['IsActor(o, c)', 'MPMain_STOGETHER', 'Проверяет clsid actor/script_actor.', 'if IsActor(obj) then return end'],
      ['IsSquad(o, c)', 'MPMain_STOGETHER', 'Проверяет online_offline_group и online_offline_group_s.', 'if IsSquad(se_obj) then ... end'],
      ['IsStalker(o, c)', 'MPMain_STOGETHER', 'Проверяет stalker/script_stalker/actor классы.', 'if IsStalker(npc) then ... end'],
      ['IsMonster(o, c)', 'MPMain_STOGETHER', 'Проверяет clsid по таблице monster_classes.', 'if IsMonster(enemy) then return false end'],
      ['IsInvbox(o, c)', 'MPMain_STOGETHER', 'Проверяет inventory_box/inventory_box_s.', 'if IsInvbox(obj:parent()) then ... end'],
      ['IsMelee(o, c)', 'MPMain_STOGETHER', 'Проверяет ножевые классы wpn_knife и wpn_knife_s.', 'if IsMelee(item) then ... end'],
      ['IsFood(o)', 'MPMain_STOGETHER', 'Проверяет i_food или i_mutant_cooked, кроме cigar.', 'if IsFood(section) then ... end'],
      ['IsMedical(o)', 'MPMain_STOGETHER', 'Проверяет kind i_medical.', 'if IsMedical(item) then ... end'],
      ['IsMedKit(o)', 'MPMain_STOGETHER', 'Проверяет medical item с medkit в section.', 'if IsMedKit("medkit_army") then ... end'],
      ['IsTablets(o)', 'MPMain_STOGETHER', 'Проверяет tablets/drug sections и отдельные medical sections.', 'if IsTablets(obj) then ... end'],
      ['IsBandages(o)', 'MPMain_STOGETHER', 'Проверяет bandage и jgut.', 'if IsBandages(item) then ... end'],
      ['IsDrugs(o)', 'MPMain_STOGETHER', 'Проверяет morphine, glucose, analgetic, rebirth, adrenaline, stimpack, salicidic.', 'if IsDrugs(section) then ... end'],
      ['IsBowl(o)', 'MPMain_STOGETHER', 'Проверяет kind i_mutant_cooked.', 'if IsBowl(obj) then ... end'],
      ['IsDrink(o)', 'MPMain_STOGETHER', 'Проверяет kind i_drink.', 'if IsDrink("vodka") then ... end'],
      ['IsCigar(o)', 'MPMain_STOGETHER', 'Проверяет cigar среди food/drink sections.', 'if IsCigar(section) then ... end'],
      ['IS_GAME_SHOC_SCOC_SCOP_', 'MPMain_STOGETHER', 'Используется в случаях, когда нужно запустить данный скрипт в другой среде.', 'IS_GAME_SHOC_SCOC_SCOP_ = true']
    ]
  },
  {
    id: 'utils',
    title: 'Глобальные утилиты',
    intro: 'Вспомогательные функции основного модуля.',
    methods: [
      ['RestoreValues()', 'MPMain_STOGETHER', 'Перечитывает MCM-настройки и применяет их к GameManager.', 'RestoreValues()'],
      ['MPAttackCondition(entity, player)', 'MPMain_STOGETHER', 'Host-side условие атаки NPC по игроку.', 'if MPAttackCondition(npc, db.actor) then ... end'],
      ['on_key_press_fix(dik, bind, dis)', 'MPMain_STOGETHER', 'Fallback для COP/CoC/SoC: отправляет callback on_key_press.', 'on_key_press_fix(dik)'],
      ['serialize_table_simple(tbl)', 'MPMain_STOGETHER', 'Сериализует простую Lua-таблицу в строку для сетевой передачи.', 'local payload = serialize_table_simple({ id = 10, state = true })'],
      ['mp_set_state_surge(pstate)', 'MPMain_STOGETHER', 'Включает или выключает выброс через surge_manager.', 'mp_set_state_surge(true)'],
      ['mp_set_state_storm(pstate)', 'MPMain_STOGETHER', 'Включает или выключает psi storm через psi_storm_manager.', 'mp_set_state_storm(false)']
    ]
  },
  {
    id: 'player',
    title: 'PlayerManager',
    intro: 'Методы управления игроками из справочных ресурсов.',
    methods: [
      ['PlayerManager:TeleportPlayer(NetID, Position)', 'engine binding', 'Телепортирует игрока по NetID к позиции.', 'pm:TeleportPlayer(id, db.actor:position())'],
      ['PlayerManager:SendToAnotherLevel(NetID, Position, gvid, lvid, Angle)', 'engine binding', 'Перемещает игрока на позицию/уровень с vertex id и направлением.', 'pm:SendToAnotherLevel(id, pos, gvid, lvid, dir)'],
      ['PlayerManager:KickPlayer(NetID)', 'engine binding', 'Отключает игрока по NetID.', 'pm:KickPlayer(id)'],
      ['PlayerManager:SendRewardTo(TO, FROM, count)', 'engine binding', 'Отправляет деньги конкретному игроку.', 'pm:SendRewardTo(targetNetId, fromNetId, 1000)'],
      ['PlayerManager:SendRewardToAll(count)', 'engine binding', 'Отправляет деньги всем игрокам.', 'pm:SendRewardToAll(500)'],
      ['PlayerManager:SendDamageTo(TO, FROM, hit)', 'engine binding', 'Передает урон игроку через hit object.', 'pm:SendDamageTo(targetNetId, fromNetId, hit_data)'],
      ['PlayerManager:SyncWeatherWith(TO, Weather, force)', 'engine binding', 'Принудительно синхронизирует погоду с игроком.', 'pm:SyncWeatherWith(id, "w_clear1", true)'],
      ['PlayerManager:SyncWeatherFXWith(TO, Weather)', 'engine binding', 'Принудительно синхронизирует погоду с игроком.', 'pm:SyncWeatherFXWith(id, "surgefx1")'],
      ['PlayerManager:SyncEmissionPsy(SNET, Psy, state)', 'engine binding', 'Принудительно синхронизирует выброс или psi storm с игроком.', 'pm:SyncEmissionPsy(id, true, true)'],
      ['PlayerManager:SyncTaskWith(SNET, task, task_giver, stage)', 'engine binding', 'Точечно синхронизирует задание с клиентом.', 'pm:SyncTaskWith(netid, tma.t, tma.task_giver_id or 65535, tma.stage)'],
	  ['GameManager:GetMySNETID()', 'engine binding', 'Возвращает сетевой идентификатор текущего клиента. Используется в OnICustomScriptAction как targetNetId.', 'local my_netid = GameManager:GetMySNETID()\nGameManager:OnICustomScriptAction("cmd", "func", "args", false, my_netid)'],
	  ['some_objectlua:GetNetID()', 'engine binding', 'Возвращает сетевой ID (NetID) игрока. Используется для целевой отправки событий конкретному объекту.', 'local netid = object:GetNetID()\nGameManager:OnICustomScriptAction(cmd, false, netid)']
	]
  },
  {
    id: 'quests',
    title: 'Квесты и торговля',
    intro: 'Методы из MPMain_QuestPatches_STOGETHER.script для синхронизации заданий, торговли и NPC-диалогов.',
    methods: [
      ['get_busied_npcs()', 'QuestPatches', 'Возвращает таблицу NPC, занятых диалогом/торговлей другим игроком.', 'local busy = MPMain_QuestPatches_STOGETHER.get_busied_npcs()'],
      ['sync_task_variables(task_id, netid)', 'QuestPatches', 'Собирает pstor/fetch/task data по task_id и отправляет клиенту.', 'sync_task_variables(task_id, netid)'],
      ['PerformRespawnTaskObjects(tma, netid)', 'QuestPatches', 'Повторно отправляет клиенту квестовые объекты или членов squad.', 'PerformRespawnTaskObjects(tma, netid)'],
      ['client_draw_postpone_locally(task_id, SkipSpecial)', 'QuestPatches', 'Локально строит PDA/news-описание задания на клиенте.', 'client_draw_postpone_locally(task_id)'],
      ['dialogs.request_trade_data(netid)', 'QuestPatches', 'Host-side запрос синхронизации trade_manager и eco difficulty.', 'dialogs.request_trade_data(netid)'],
      ['trade_manager.sync_trade_data(data)', 'QuestPatches', 'Клиент принимает и применяет trade_manager data.', 'trade_manager.sync_trade_data(data)'],
      ['game_difficulties.sync_array_diffs(data)', 'QuestPatches', 'Синхронизирует игровые и экономические difficulty factors.', 'game_difficulties.sync_array_diffs(data)'],
      ['dialogs.remote_task_var_sync(packet)', 'QuestPatches', 'Принимает одиночную или пакетную синхронизацию task variables.', 'dialogs.remote_task_var_sync({ key, value, false })'],
      ['dialogs.remote_sync_available_tasks(packet)', 'QuestPatches', 'Клиент принимает available_tasks с конвертацией server id в local id.', 'dialogs.remote_sync_available_tasks(packet)'],
      ['dialogs.remote_sync_ongoing_tasks(packet)', 'QuestPatches', 'Клиент принимает ongoing_tasks с конвертацией server id в local id.', 'dialogs.remote_sync_ongoing_tasks(packet)'],
      ['dialogs.remote_request_generate_tasks(netid)', 'QuestPatches', 'Host-side генерация available/ongoing tasks для говорящего NPC.', 'dialogs.remote_request_generate_tasks(netid)'],
      ['task_manager.CRandomTask:give_task_client(task_id, task_giver_id, client_giver_id)', 'QuestPatches', 'Локально выдает задание и сохраняет owner net id.', 'task_manager.get_task_manager():give_task_client(task_id, giver_id, netid)'],
      ['task_manager.CRandomTask:give_task(task_id, task_giver_id)', 'QuestPatches', 'Переопределение выдачи задания с host/client синхронизацией.', 'task_manager.get_task_manager():give_task(task_id, giver_id)'],
      ['dialogs.npc_skip_task(a, b)', 'QuestPatches', 'Переопределение skip task с запросом нового пула задач у хоста.', 'dialogs.npc_skip_task(a, b)'],
      ['task_objects.CGeneralTask:check_task(tm)', 'QuestPatches', 'Переопределение проверки задания с синхронизацией изменений на хосте.', 'task:check_task(tm)'],
      ['dialogs.remote_configure_npc(table_data)', 'QuestPatches', 'Клиентский прием блокировки или разблокирвки возможности поговорить с NPC.', 'dialogs.remote_configure_npc({ id = id, busy = true, netid = netid })'],
      ['dialogs.actor_has_item(first_speaker, second_speaker, section)', 'QuestPatches', 'Проверяет наличие предмета у всех игроков через xr_conditions.actor_has_item.', 'dialogs.actor_has_item(a, b, "medkit")'],
      ['xr_effects.clear_old_tasks(tblist)', 'QuestPatches', 'Завершает задачи, отсутствующие в переданном списке.', 'xr_effects.clear_old_tasks(activeTasks)']
    ]
  },
  {
    id: 'game-patches',
    title: 'Патчи игровых систем',
    intro: 'Методы, добавленные или переопределенные основным файлом игровых патчей.',
    methods: [
      ['Patch()', 'GamePatches', 'Применяет патчи игровых скриптов для синхронизации действий.', 'MPMain_GamePatches_STOGETHER.Patch()'],
      ['ui_pda_npc_tab.register_pda(npc, pda_sec, pda_id)', 'GamePatches', 'Регистрирует PDA и планирует sync_pda_info на хосте.', 'ui_pda_npc_tab.register_pda(npc, sec, id)'],
      ['ui_pda_npc_tab.sync_pda_info(pda_id)', 'GamePatches', 'Отправляет info PDA клиентам по server id.', 'ui_pda_npc_tab.sync_pda_info(pda_id)'],
      ['ui_pda_npc_tab.remote_receive_pda_info(data)', 'GamePatches', 'Клиент принимает PDA info и сохраняет по local id.', 'ui_pda_npc_tab.remote_receive_pda_info(data)'],
      ['ui_pda_npc_tab.remote_process_pda_message(data)', 'GamePatches', 'Хост обрабатывает stash/route сообщение PDA и рассылает результат.', 'ui_pda_npc_tab.remote_process_pda_message(data)'],
      ['ui_pda_npc_tab.remote_sync_route(data)', 'GamePatches', 'Добавляет discovered route на клиенте.', 'ui_pda_npc_tab.remote_sync_route(data)'],
      ['ui_pda_npc_tab.remote_unlock_pdas(data)', 'GamePatches', 'Синхронизирует разблокировку encrypted PDA.', 'ui_pda_npc_tab.remote_unlock_pdas(data)'],
      ['bind_stalker_ext.clear_death_logo()', 'GamePatches', 'Убирает death overlay, pp effector и возвращает input.', 'bind_stalker_ext.clear_death_logo()'],
      ['bind_stalker_ext.death_manager_mp(reload, show_message)', 'GamePatches', 'Кооперативный менеджер смерти, resurrection и reconnect.', 'bind_stalker_ext.death_manager_mp(false, true)'],
      ['bind_stalker_ext.actor_on_before_death(binder, whoID)', 'GamePatches', 'Обрабатывает смерть actor: drop/clear inventory, resurrection, анимация.', 'bind_stalker_ext.actor_on_before_death(binder, whoID)'],
      ['bind_campfire.campfire_go_off(cf, obj)', 'GamePatches', 'Гасит костер и синхронизирует interaction.', 'bind_campfire.campfire_go_off(cf, obj)'],
      ['bind_campfire.campfire_go_on(obj, cf)', 'GamePatches', 'Зажигает костер и синхронизирует interaction.', 'bind_campfire.campfire_go_on(obj, cf)'],
      ['bind_campfire.actor_on_item_use(obj, cfo, cf)', 'GamePatches', 'Использует matches/box_matches для костра.', 'bind_campfire.actor_on_item_use(obj, cfo, cf)'],
      ['itms_manager.use_guitar(obj)', 'GamePatches', 'Проигрывает гитару, continuous effect и синхронизированную анимацию.', 'itms_manager.use_guitar(obj)'],
      ['itms_manager.use_harmonica(obj)', 'GamePatches', 'Проигрывает гармонику, effect и синхронизированную анимацию.', 'itms_manager.use_harmonica(obj)'],
      ['ph_button.ph_button:use_callback(victim, who)', 'GamePatches', 'Синхронизирует нажатие физической кнопки.', 'button:use_callback(victim, who)'],
      ['ui_debug_launcher.UIDebug_ObjSpawn:Spawn(section)', 'GamePatches', 'Переопределяет debug spawn через alife_create_client.', 'spawner:Spawn("section")'],
      ['item_backpack.on_game_start()', 'GamePatches', 'Регистрирует callbacks для backpack stash.', 'item_backpack.on_game_start()'],
      ['item_backpack.actor_on_item_use(obj)', 'GamePatches', 'Создает player stash из actor backpack.', 'item_backpack.actor_on_item_use(obj)'],
      ['item_backpack.actor_on_item_take_from_box(box, obj)', 'GamePatches', 'Удаляет пустой backpack stash и возвращает backpack item.', 'item_backpack.actor_on_item_take_from_box(box, obj)'],
      ['item_backpack.receive_backpacks_data(tbl_data)', 'GamePatches', 'Принимает player_created_stashes и добавляет spots.', 'item_backpack.receive_backpacks_data(data)'],
      ['item_backpack.sync_all_stashes(netid)', 'GamePatches', 'Отправляет клиенту таблицу созданных тайников.', 'item_backpack.sync_all_stashes(netid)'],
      ['item_backpack.remote_stash_create(tbl_data)', 'GamePatches', 'Host-side создание backpack stash по данным клиента.', 'item_backpack.remote_stash_create(data)'],
      ['trans_outfit.transparent_gg()', 'GamePatches', 'Обновляет visibility range для NPC рядом с actor.', 'trans_outfit.transparent_gg()'],
      ['txr_mines.sync_bomb(tbl)', 'GamePatches', 'Синхронизирует cache мины/бомбы.', 'txr_mines.sync_bomb({ id, cache })'],
      ['txr_mines.remote_plant_bomb(tbl_data)', 'GamePatches', 'Host-side установка взрывчатки и sync cache.', 'txr_mines.remote_plant_bomb(payload)'],
      ['txr_mines.plant_bomb(obj, mode, delay)', 'GamePatches', 'Локальная установка взрывчатки с удалением предмета и запросом хоста.', 'txr_mines.plant_bomb(obj, mode, delay)'],
      ['level_input.action_quick_load(dik, bind)', 'GamePatches', 'Блокирует quick load.', 'level_input.action_quick_load(dik, bind)'],
      ['surge_manager.start_surge(pforce)', 'GamePatches', 'Запускает выброс через surge manager.', 'surge_manager.start_surge(true)'],
      ['surge_manager.stop_surge(pforce)', 'GamePatches', 'Останавливает выброс.', 'surge_manager.stop_surge(true)'],
      ['psi_storm_manager.start_psi_storm(pforce)', 'GamePatches', 'Запускает psi storm.', 'psi_storm_manager.start_psi_storm(true)'],
      ['psi_storm_manager.stop_psi_storm(pforce)', 'GamePatches', 'Останавливает psi storm.', 'psi_storm_manager.stop_psi_storm(true)'],
      ['xr_sound.set_sound_play_client(npc_id, sound, faction, point)', 'GamePatches', 'Вызов оригинального set_sound_play без сетевой пересылки.', 'xr_sound.set_sound_play_client(npc_id, sound)'],
      ['xr_conditions.actor_has_item(actor, npc, p)', 'GamePatches', 'Проверяет предмет у actor или у PlayerManager на хосте.', 'xr_conditions.actor_has_item(actor, npc, { "medkit" })'],
      ['xr_conditions.actor_in_zone(actor, npc, p)', 'GamePatches', 'Проверяет наличие игроков внутри zone.', 'xr_conditions.actor_in_zone(actor, npc, { "zone_name" })'],
      ['ui_sleep_dialog.get_ui_silent()', 'GamePatches', 'Возвращает/создает UI сна без показа.', 'ui_sleep_dialog.get_ui_silent()'],
      ['ui_sleep_dialog.remote_dream_exec(time)', 'GamePatches', 'Удаленно запускает dream callback для сна.', 'ui_sleep_dialog.remote_dream_exec(time)'],
      ['ui_inventory.remote_unload_ammo(obj, id)', 'GamePatches', 'Удаленная разрядка ammo для inventory action.', 'ui_inventory.remote_unload_ammo(obj, id)'],
      ['treasure_manager.sync_all_stashes(PlayerNetID)', 'GamePatches', 'Синхронизирует treasure caches с игроком.', 'treasure_manager.sync_all_stashes(netid)'],
      ['treasure_manager.remote_sync_treasure_caches(table)', 'GamePatches', 'Принимает и применяет treasure caches.', 'treasure_manager.remote_sync_treasure_caches(data)'],
      ['treasure_manager.remote_create_random_stash(p)', 'GamePatches', 'Host-side создание random stash по payload.', 'treasure_manager.remote_create_random_stash(p)'],
      ['treasure_manager.remote_add_map_spot(p)', 'GamePatches', 'Добавляет spot тайника на клиенте.', 'treasure_manager.remote_add_map_spot(p)'],
      ['treasure_manager.remote_client_clear_treasure(srv_id)', 'GamePatches', 'Очищает treasure cache клиента по server id.', 'treasure_manager.remote_client_clear_treasure(srv_id)'],
      ['ui_workshop.silent_craft_item(tbl)', 'GamePatches', 'Синхронизированное тихое создание crafted item.', 'ui_workshop.silent_craft_item(tbl)'],
      ['pda.host_request_ranking(data)', 'GamePatches', 'Host-side подготовка PDA ranking для клиента.', 'pda.host_request_ranking(data)'],
      ['pda.client_receive_ranking(payload)', 'GamePatches', 'Клиент принимает PDA ranking payload.', 'pda.client_receive_ranking(payload)'],
      ['news_manager.send_tip_client(data)', 'GamePatches', 'Клиентский прием tip/news.', 'news_manager.send_tip_client(data)'],
      ['dynamic_news_helper.send_tip_client(data)', 'GamePatches', 'Клиентский прием dynamic news tip.', 'dynamic_news_helper.send_tip_client(data)']
    ]
  },
  {
    id: 'addons',
    title: 'Аддоны и совместимость',
    intro: 'Методы из MPMain_GamePatches_ADDONS_STOGETHER.script для интеграции аддонов.',
    methods: [
      ['engine_perform_special_addon_sync(id, ToPlayerNetID)', 'ADDONS', 'Отложенная синхронизация специальных данных аддонов; в коде используется для magazines.', 'engine_perform_special_addon_sync(id, netid)'],
      ['addoned_rf_client()', 'ADDONS', 'Клиентская логика RF beeper для raid tasks рядом с target_position.', 'addoned_rf_client()'],
      ['addoned_draw_postpone_locally(task_id)', 'ADDONS', 'Дополнительная локальная генерация описания заданий для IGI/NTA/fetch/special cases.', 'addoned_draw_postpone_locally(task_id)'],
      ['Patch()', 'ADDONS', 'Применяет патчи совместимости для аддонов.', 'MPMain_GamePatches_ADDONS_STOGETHER.Patch()'],
      ['raid_radio.spawn_radio(mode)', 'ADDONS', 'Клиент отправляет запрос хосту на spawn radio.', 'raid_radio.spawn_radio(mode)'],
      ['raid_travel_manager.raid_teleport(level_name)', 'ADDONS', 'Клиент отправляет запрос хосту на raid teleport и блокирует повторный клик.', 'raid_travel_manager.raid_teleport(level_name)'],
      ['raid_notebook_gui.RaidNotebook:OnAcceptTask(i)', 'ADDONS', 'Отправляет запрос хосту на принятие raid task.', 'notebook:OnAcceptTask(i)'],
      ['raid_notebook_gui.RaidNotebook:OnClickTaskMenu()', 'ADDONS', 'Запрашивает raid tasks data у хоста.', 'notebook:OnClickTaskMenu()'],
      ['raid_notebook_gui.receive_tasks_data(tbl)', 'ADDONS', 'Клиент принимает raid tasks и обновляет UI.', 'raid_notebook_gui.receive_tasks_data(tbl)'],
      ['raid_tasks_deliveries.func_mines(obj)', 'ADDONS', 'Обрабатывает доставку mines и удаление объекта.', 'raid_tasks_deliveries.func_mines(obj)'],
      ['magazines.ejectmug_remote_event(id, obj)', 'ADDONS', 'Remote handler для eject magazine.', 'magazines.ejectmug_remote_event(id, obj)'],
      ['magazines.remote_unload_ammo(id, obj)', 'ADDONS', 'Remote handler разрядки магазина.', 'magazines.remote_unload_ammo(id, obj)'],
      ['magazines.func_unload_ammo(obj)', 'ADDONS', 'Отправляет/запускает синхронизированную разрядку магазина.', 'magazines.func_unload_ammo(obj)'],
      ['pda_taskboard.remote_request_improved_taskboard(table_data, onlyreturn)', 'ADDONS', 'Host-side сбор improved taskboard для списка NPC.', 'pda_taskboard.remote_request_improved_taskboard(data)'],
      ['pda_taskboard.remote_receive_improved_taskboard(table_data)', 'ADDONS', 'Клиент принимает taskboard entries и обновляет UI.', 'pda_taskboard.remote_receive_improved_taskboard(data)'],
      ['ui_pda_taskboard_tab.pda_taskboard_tab:OnBtnRefreshClicked()', 'ADDONS', 'Запрашивает taskboard data у хоста на клиенте.', 'tab:OnBtnRefreshClicked()']
    ]
  },
  {
    id: 'callbacks',
    title: 'Script callbacks',
    intro: 'Callback-и, объявленные модом через AddScriptCallback или используемые патчами.',
    methods: [
      ['onmp_player_connected_server(PlayerNetID, nick)', 'MPMain_STOGETHER', 'Игрок подключился на стороне сервера.', 'RegisterScriptCallback("onmp_player_connected_server", function(netid, nick) end)'],
      ['onmp_player_connected', 'MPMain_STOGETHER', 'Игрок подключился на стороне клиента.', 'RegisterScriptCallback("onmp_player_connected", function(...) end)'],
      ['onmp_player_disconnected_server', 'MPMain_STOGETHER', 'Игрок отключился на стороне сервера.', 'RegisterScriptCallback("onmp_player_disconnected_server", function(...) end)'],
      ['onmp_player_disconnected', 'MPMain_STOGETHER', 'Игрок отключился на стороне клиента.', 'RegisterScriptCallback("onmp_player_disconnected", function(...) end)'],
      ['onmp_player_changed_level', 'MPMain_STOGETHER', 'Игрок сменил уровень.', 'RegisterScriptCallback("onmp_player_changed_level", function(...) end)'],
      ['onmp_player_chatted_message', 'MPMain_STOGETHER', 'Игрок отправил сообщение в чат.', 'RegisterScriptCallback("onmp_player_chatted_message", function(...) end)'],
      ['onmp_player_changed_visual', 'MPMain_STOGETHER', 'Изменился visual игрока.', 'RegisterScriptCallback("onmp_player_changed_visual", function(...) end)'],
      ['onmp_player_info_portion', 'MPMain_STOGETHER', 'Действие при получении info portion игрока.', 'RegisterScriptCallback("onmp_player_info_portion", function(...) end)'],
      ['onmp_player_interact', 'MPMain_STOGETHER', 'Сетевое взаимодействие игрока с объектом.', 'RegisterScriptCallback("onmp_player_interact", function(...) end)'],
      ['onmp_entity_spawned', 'MPMain_STOGETHER', 'Вызывается для объекта, который появился после чтения спавн пакета.', 'RegisterScriptCallback("onmp_entity_spawned", function(se_obj) end)'],
      ['onmp_connected', 'MPMain_STOGETHER', 'Когда подключились к серверу происходит вызов в момент получения специальной информации или данных сервера.', 'RegisterScriptCallback("onmp_connected", function(...) end)'],
      ['onmp_player_task_data', 'MPMain_STOGETHER', 'Сетевые данные задания игрока.', 'RegisterScriptCallback("onmp_player_task_data", function(...) end)'],
      ['actor_on_item_use', 'GamePatches', 'Используется backpack и item логикой.', 'RegisterScriptCallback("actor_on_item_use", handler)'],
      ['npc_on_death_callback', 'GamePatches', 'Используется entity death sync.', 'RegisterScriptCallback("npc_on_death_callback", handler)'],
      ['monster_on_death_callback', 'GamePatches', 'Используется entity death sync.', 'RegisterScriptCallback("monster_on_death_callback", handler)'],
      ['actor_on_climb_start', 'ADDONS', 'Используется demonized ledge grabbing sync.', 'RegisterScriptCallback("actor_on_climb_start", handler)'],
      ['GUI_on_show', 'QuestPatches', 'Используется для блокировки NPC и запроса trade/task data.', 'RegisterScriptCallback("GUI_on_show", handler)'],
      ['GUI_on_hide', 'QuestPatches', 'Используется для разблокировки NPC после диалога.', 'RegisterScriptCallback("GUI_on_hide", handler)']
    ]
  },
  {
    id: 'custom',
    title: 'Кастомные действия',
    intro: 'Методы для отправки пользовательских сетевых событий.',
    methods: [
      ['OnICustomScriptAction(script_name, script_funct, script_args, OnlyToServer, targetNetId)', 'engine binding', 'Отправляет кастомное действие. С клиента — на хост и ретрансляция всем. OnlyToServer=true — только на хост. targetNetId — конкретному игроку.', 'local sr = serialize_table_simple(payload)\nGameManager:OnICustomScriptAction("dialogs", "remote_configure_npc", sr, false)'],
      ['Пример: синхронизация переменных', 'MPMain_QuestPatches', 'Отправка task variables конкретному клиенту.', 'local sr = serialize_table_simple({ "data", totalvars, true })\nGameManager:OnICustomScriptAction("dialogs", "remote_task_var_sync", sr, false, netid)'],
      ['Пример: запрос данных', 'MPMain_QuestPatches', 'Клиент запрашивает данные у хоста (OnlyToServer=true).', 'local my_netid = GameManager:GetMySNETID() \nlocal sr = tostring(my_netid)\nGameManager:OnICustomScriptAction("dialogs", "request_trade_data", sr, true)'],
      ['Пример: спавн предмета', 'MPMain_QuestPatches', 'Удалённый спавн предмета у игрока.', 'GameManager:OnICustomScriptAction(cmd, false, object:GetNetID() or 0)'],
	  ['GameManager:GetMySNETID()', 'engine binding', 'Возвращает сетевой идентификатор текущего клиента. Используется в OnICustomScriptAction как targetNetId.', 'local my_netid = GameManager:GetMySNETID()\nGameManager:OnICustomScriptAction("cmd", "func", "args", false, my_netid)'],
	  ['some_objectlua:GetNetID()', 'engine binding', 'Возвращает сетевой ID (NetID) игрока. Используется для целевой отправки событий конкретному объекту.', 'local netid = object:GetNetID()\nGameManager:OnICustomScriptAction(cmd, false, netid)']
	]
  },
  {
    id: 'commands',
    title: 'Консольные команды',
    intro: 'Команды из предоставленного developer FAQ.',
    methods: [
      ['say', 'faq-data', 'Отправляет сообщение в чат из консоли.', 'say hello'],
      ['sync_weatherfx_with_clients', 'faq-data', 'Синхронизирует weather FX с клиентами.', 'sync_weatherfx_with_clients'],
      ['sync_weather_with_clients', 'faq-data', 'Синхронизирует погоду с клиентами.', 'sync_weather_with_clients'],
      ['sync_time_with_clients', 'faq-data', 'Синхронизирует время с клиентами.', 'sync_time_with_clients'],
      ['mdisconnect', 'faq-data', 'Принудительно отключает от сессии (новая логика).', 'mdisconnect'],
      ['disconnect', 'faq-data', 'Принудительно отключает от сессии (ориг логика).', 'disconnect'],
      ['reconnect', 'faq-data', 'Переподключает к серверу и загружает последнее сохранение.', 'reconnect'],
      ['connect', 'faq-data', 'Подключает к серверу по адресу.', 'connect 127.0.0.1:44139'],
      ['kickplayer', 'faq-data', 'Кикает игрока по nickname.', 'kickplayer werasik2aa'],
      ['sendmoney', 'faq-data', 'Отправляет деньги игроку.', 'sendmoney werasik2aa 3500'],
      ['mp_olmode', 'faq-data', 'Переключает LAN/Online mode.', 'mp_olmode 0\nmp_olmode 1'],
      ['mp_nickname', 'faq-data', 'Меняет текущий nickname.', 'mp_nickname werasik2aa']
    ]
  },
  {
    id: 'steam',
    title: 'Steam и подключение',
    intro: 'Справочная информация из developer FAQ.',
    methods: [
      ['steam_appid.txt / 480', 'faq-data', 'Если Steam Overlay не работает, необходимо создать steam_appid.txt с текстом "480" в корне игры/bin.', '480'],
      ['Steam Overlay connect', 'faq-data', 'Подключение к другу через Shift+Tab. Для того, чтобы подключится через стим необходим сам стим.', 'Shift+Tab -> друг -> присоедениться к игре'],
      ['Steam traffic restrictions', 'faq-data', 'Большие reliable payload нужно дробить или отправлять с задержками.', 'Chunk large CustomScriptAction payloads'],
      ['LAN mode', 'faq-data', 'Для переключение игры в режим по локальной сети (LAN)', 'можно закрыть стим или ввести команду mp_olmode 0']
    ]
  }
];

const docs = document.getElementById('docs');
const nav = document.getElementById('navlinks');
const search = document.getElementById('search');
const counter = document.getElementById('counter');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function render(filter = '') {
  const q = filter.trim().toLowerCase();
  let visible = 0;
  let total = 0;

  nav.innerHTML = sections.map((section) => `<a href="#${section.id}">${section.title}</a>`).join('');

  docs.innerHTML = sections.map((section) => {
    const methods = section.methods.filter(([name, source, desc]) => {
      total += 1;
      return !q || `${name} ${source} ${desc} ${section.title}`.toLowerCase().includes(q);
    });

    visible += methods.length;

    const cards = methods.map(([name, source, desc, example]) => `
      <article class="method">
        <div class="method-header">
          <h3><code>${escapeHtml(name)}</code></h3>
          <span class="method-source">${escapeHtml(source)}</span>
        </div>
        <p>${escapeHtml(desc)}</p>
        ${example ? `<details><summary>Пример / вызов</summary><pre><code>${escapeHtml(example)}</code></pre></details>` : ''}
      </article>
    `).join('');

    return `
      <section class="section ${methods.length ? '' : 'hidden'}" id="${section.id}">
        <div class="section-head">
          <div>
            <p class="eyebrow">${methods.length} методов</p>
            <h2>${section.title}</h2>
            <p>${section.intro}</p>
          </div>
          <span class="badge">${section.methods.length} всего</span>
        </div>
        <div class="methods">${cards}</div>
      </section>
    `;
  }).join('');

  counter.textContent = q ? `${visible} из ${total}` : `${total} методов и команд`;
}

search.addEventListener('input', () => render(search.value));
render();
