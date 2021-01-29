<?php 
 $stats_json = file_get_contents("data/stats.json");
 $stats = json_decode($stats_json, TRUE) 
 ?>
<table>
    <thead>
        <tr>
            <th><h3>Ability Scores</h3></th>
        </tr>
        <tr>
            <th></th>
            <th>Base</th>
            <th>Final</th>
            <th>Modifier</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($stats as $stat): ?>
            <?php include("templates/character-ability.php"); ?>
        <?php endforeach; ?>
        <tr><td>Points</td><td>20</td></tr>
    </tbody>
</table>