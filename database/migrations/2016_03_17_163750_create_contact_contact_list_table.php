<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactContactListTable extends Migration
{
    
    public function up()
    {
        Schema::create('contact_contact_list', function(Blueprint $table) {
            $table->integer('contact_id')->unsigned()->index();
            $table->integer('contact_list_id')->unsigned()->index();
            $table->primary(['contact_id', 'contact_list_id']);
            $table->foreign('contact_id')
                ->references('id')
                ->on('contacts');
            $table->foreign('contact_list_id')
                ->references('id')
                ->on('contact_lists');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('contact_contact_list');
    }
}
